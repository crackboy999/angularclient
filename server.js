const app = express();

app.use(express.static(__dirname+'/dist/my-aplicacion'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/my-aplicacion/index.html'));
});

app.listen(process.env.PORT || 8080);