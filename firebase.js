// Firebase Config (REPLACE WITH YOUR DETAILS)
var firebaseConfig = {
  databaseURL: "https://medicine-reminder-3e630-default-rtdb.firebaseio.com/",
  projectId: "medicine-reminder-3e630",
  appId: "1:604464907864:web:8fdaaabea3cfc91222ec2d"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database();