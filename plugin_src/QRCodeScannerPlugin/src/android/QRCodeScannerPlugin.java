package mcnc.plugin.qrcodescanner;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
//Customize
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaInterface;
import android.util.Log;
import android.widget.Toast;
import android.content.Context;
import android.content.Intent;
import android.app.Activity;

/**
 * This class echoes a string called from JavaScript.
 */
public class QRCodeScannerPlugin extends CordovaPlugin {

    private static final String TAG = "QRCodeScannerPlugin";
    private int LAUNCH_SECOND_ACTIVITY = 1;
    private CallbackContext callback = null;
    Context context;
    CordovaInterface mCordova;

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        context = cordova.getActivity().getApplicationContext();
        mCordova = cordova;

        Log.d(TAG, "Initialize QRCodeScannerPlugin");
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        callback = callbackContext;

        if (action.equals("scan")) {
            String message = args.getString(0);
            this.scan(message, callbackContext);
            return true;
        }
        return false;
    }

    private void scan(String message, CallbackContext callbackContext) {
        // Toast.makeText(context, message, Toast.LENGTH_SHORT).show();
        Intent intent = null;
        try {
            intent = new Intent(context,
                    Class.forName("com.mcnc.qr_code_scanner.MainActivity"));
            intent.putExtra("APP_BAR_TITLE", "PPCBank Scanner");
            intent.putExtra("APP_BAR_BACKGROUND_COLOR", "#004c97");
            intent.putExtra("SCANNER_TITLE", "ស្កេន QR");
            intent.putExtra("SCANNER_DESCRIPTION", "Align frame with QR code");
            intent.putExtra("SCANNER_COLOR_MASK", "#CD004C97");
            // context.startActivity(intent);
           cordova.startActivityForResult((CordovaPlugin) this, intent, LAUNCH_SECOND_ACTIVITY);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        System.out.println(requestCode);
        if (requestCode == LAUNCH_SECOND_ACTIVITY) {
            if(resultCode == Activity.RESULT_OK){
                String result = data.getStringExtra("RESULT");
                // System.out.println(result);
                // Toast.makeText(context, result, Toast.LENGTH_SHORT).show();
                callback.success(result);
            }
            if (resultCode == Activity.RESULT_CANCELED) {
                // Write your code if there's no result
                callback.error("error");
            }
        }
    }
}
