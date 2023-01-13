const template = (manger, intern) => {
  return `<style>
header{
  height:100px;
  width:100%;
  background-color:pink;

}
header h1{
  color:white;
  height:100%;
  text-align:center;
}
main{
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;

}
.card-header{
  background:blue;
  color:white;
  padding:15px;
}
</style>


<body>
 <header>
 <h1 class="team">My Team</h1>
 </header>
 <main >
 
 ${mangerCard(manger)}
 
 </main>

<body>

`;
};
function mangerCard(manger) {
  return `
<div class="card">
   <div class="card-header">
    <p> ${manger.getName()}</p>
  <p>Manger</p>
  </div>

  <div class="card-body">
  <ul>
  <li>ID: ${manger.getId()}</li>
  <li>Email :<a href="mailTo:${manger.getEmail()}" >${manger.getEmail()}</a></li>
  <li>Office Number:${manger.getOfficeNumber()}</li>
  </ul>

  </div>

</div>
`;
}
function internCard(intern) {}

function engineerCard(engineer) {}
module.exports = template;
