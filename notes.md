Developer Notes
===============

##Providers
###What is Providers
Providers are services that allows the app to send HttpRequest to server.

###How to Create Providers
####Command Line Generation
In the command line of your project file, type in
```bash
ionic generate provider providerName
```

This will generate a folder with the same name in the `providers` folder.

In the generated folder, there will be one generated ts file, which is the implementation part of the provider code.

####Writing the Interface File
