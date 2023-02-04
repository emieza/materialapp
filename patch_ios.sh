# Patch compiling iOS errors from QR scanner plugin
# https://github.com/bitpay/cordova-plugin-qrscanner/issues/301

find . -type f -name "*.swift" -print0 | xargs -0 sed -i '' -e 's/UIApplication.openSettingsURLString/UIApplicationOpenSettingsURLString/g'
