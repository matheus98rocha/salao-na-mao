const mongoose = require('mongoose');
const URI = 'mongodb+srv://matheus98rocha:15021998cma@clusterdev.4ii2h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(URI)
    .then(() => console.log("DB is connected"))
    .catch(() => console.log(err))