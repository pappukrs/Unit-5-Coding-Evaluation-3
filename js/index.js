// console.log("index")


url=`https://api.openbrewerydb.org/breweries/madtree-brewing-cincinnati`;

async function fetchData(){
try {
    let res=await fetch(url);
    let data=await res.json();
    displayData(data);
    console.log(data);
}catch (error) {
    console.log(error)
}
}

fetchData();

function displayData(data){
 
    let table=document.createElement('table');

    let thead=document.createElement('thead');

    let row1=document.createElement('tr');
    let th1=document.createElement('th');
    th1.textContent = `NAME`;
    let th2=document.createElement('th');
    th2.textContent=`Brewery_type`
    let th3=document.createElement('th');
    th3.textContent=`City`
    let th4=document.createElement('th');
    th4.textContent=`State`
    let th5=document.createElement('th');
    th5.textContent=`Button`;

    row1.append(th1,th2,th3,th4,th5);
    thead.append(row1);

    let tbody=document.createElement('tbody');

    let row2=document.createElement('tr');
    let th21=document.createElement('th');
    th21.textContent = `${data.name}`;
    let th22=document.createElement('th');
    th22.textContent=`${data.brewery_type}`;
    let th23=document.createElement('th');
    th23.textContent=`${data.city}`
    let th24=document.createElement('th');
    th24.textContent=`${data.state}`
    let th25=document.createElement('th');
    th5.textContent=`More Details`;
     row2.append(th21,th22,th23,th24,th5);
    tbody.append(row2);

    table.append(thead,tbody);

    document.querySelector("#container").append(table);


}
// displayData(data);