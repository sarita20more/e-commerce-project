const express=require('express');
const stateRoute=express.Router();
var State=require('./state.model');
//save state
stateRoute.route 
('/save').post((req,res)=>{
    let state=new State(req.body);
    state.save()
    .then(state=>{
        res.send("state saved");
        res.end();
    })
    .catch(err=>{
        res.send("unable to save to database");
    });
});
//show all states
stateRoute.route('/show').get((req,res)=>{
    State.find().then((state)=>{
        res.send(state);
        res.end();
    }).catch((err)=>{
        res.send(err);
        res.end();
    })
});
//search states
stateRoute.route('/searchbyname/:stname').get((req,res)=>{
    State.findOne({"stname":req.params.stname}).then((state)=>{
            res.send(state);
            res.end();
        }).catch((err)=>{
            res.send(err);
            res.end();
        })
    });
//search states
stateRoute.route('/searchbyid/:stid').get((req,res)=>{
    State.findOne({"stid":req.params.stid}).then((state)=>{
            res.send(state);
            res.end();
        }).catch((err)=>{
            res.send(err);
            res.end();
        })
    });

   
//get all enabled states
stateRoute.route('/getallenabled').get((req,res)=>{
    State.find({"status":1}).then((state)=>{
            res.send(state);
            res.end();
        }).catch((err)=>{
            res.send(err);
            res.end();
        })
    });
    
//save state
stateRoute.route
    ('/update').put((req,res)=>{
        let state=new State(req.body);
        State.updateOne({"stid":state.stid},{"stname":state.stname,
            "status":state.status})
            .then(state=>{
                res.send("state Updated");
                res.end();
            })
            .catch(err=>{
                res.send("unable to save to database");
            });

    });
    //save state
    stateRoute.route
    ('/delete/:stid').delete( (req,res)=>{

      State.updateOne({"stid":req.params.stid},{"status":0})
          .then(state=>{
            res.send("state Deleted");
            res.end();
          })
          .catch(err=>{
          res.send("unable to save to database");
          });

    });
module.exports=stateRoute;
