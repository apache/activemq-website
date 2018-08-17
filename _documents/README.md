 
## ActiveMQ GitBook Documents.

Install Node
 
Install GitBook CLI:
 
```npm install gitbook-cli -g```
 
 
To Run Locally
 
```
cd ./docs
gitbook serve ./classic
gitbook serve ./nms
``` 

To Generate Static 

```
cd ./docs
gitbook build ./classic ../gitbook/classic/documents
gitbook build ./nms ../gitbook/nms/documents

``` 


 
 