## Service account key
Replace you servide account key with `key/serviceAccountKey.json`

## Use your Project ID
For project ID go to Settings -> General
Replace `<Project ID>` with your project ID
```
admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
    databaseURL: 'https://<Project ID>.firebaseio.com'
});
```  