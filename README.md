## Service account key
For service account key go to `Settings -> Service Account` and Generate New Private Key. You'll get a json file. <br>
Replace you service account key with `key/serviceAccountKey.json`

## Use your Project ID
For project ID go to `Settings -> General` <br>
Replace `<Project ID>` with your project ID

```
admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
    databaseURL: 'https://<Project ID>.firebaseio.com'
});
```  