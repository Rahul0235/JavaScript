//JavaScript Fetch API
//API - application programming interfacce

//Fetch api : It is an interface for sending and receving resources

const URL = "https://cat-fact.herokuapp.com/facts";

const getFact = async () => {
    console.log("getting data......");
    let response = await fetch(URL);
    console.log(response);
}
