



var address="";
var abiXen='[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"name":"MintClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"term","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rank","type":"uint256"}],"name":"RankClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"term","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"AUTHORS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DAYS_IN_YEAR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EAA_PM_START","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EAA_PM_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EAA_RANK_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GENESIS_RANK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PENALTY_PCT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TERM_END","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TERM_START","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_TERM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_AMPLIFIER_END","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_AMPLIFIER_START","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_IN_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TERM_AMPLIFIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TERM_AMPLIFIER_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAWAL_WINDOW_DAYS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_APY_DAYS_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_APY_END","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_APY_START","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_MIN_BURN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_MIN_STAKE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activeMinters","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activeStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimMintReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"other","type":"address"},{"internalType":"uint256","name":"pct","type":"uint256"}],"name":"claimMintRewardAndShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pct","type":"uint256"},{"internalType":"uint256","name":"term","type":"uint256"}],"name":"claimMintRewardAndStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"term","type":"uint256"}],"name":"claimRank","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"genesisTs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentAPY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentEAAR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentMaxTerm","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rankDelta","type":"uint256"},{"internalType":"uint256","name":"amplifier","type":"uint256"},{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"eaa","type":"uint256"}],"name":"getGrossReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getUserMint","outputs":[{"components":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"maturityTs","type":"uint256"},{"internalType":"uint256","name":"rank","type":"uint256"},{"internalType":"uint256","name":"amplifier","type":"uint256"},{"internalType":"uint256","name":"eaaRate","type":"uint256"}],"internalType":"struct XENCrypto.MintInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserStake","outputs":[{"components":[{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"maturityTs","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"apy","type":"uint256"}],"internalType":"struct XENCrypto.StakeInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"globalRank","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"term","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalXenStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userBurns","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userMints","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"maturityTs","type":"uint256"},{"internalType":"uint256","name":"rank","type":"uint256"},{"internalType":"uint256","name":"amplifier","type":"uint256"},{"internalType":"uint256","name":"eaaRate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userStakes","outputs":[{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"maturityTs","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"apy","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]';

//const contrato='0x0D6A3F69048D8b49463E8f4Ad3cA4B278E55de67'0xb564a5767a00ee9075cac561c427643286f8f4e1   0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e  0xC0C5AA69Dbe4d6DDdfBc89c0957686ec60F24389;
const contrato='0x0D6A3F69048D8b49463E8f4Ad3cA4B278E55de67';

var uterm="";
var maturityTs="";
var crank="";
var amplifier="";
var eaaRate="";
var globalrank=null;


ethereum.on('accountsChanged', function () {
    // Recargar la página automáticamente
    
    location.reload();
    ActualizarDasboard();
  });
window.addEventListener('load', () => {
    ActualizarDasboard();
  });


document.addEventListener("DOMContentLoaded", function() {
     conectar = document.getElementById("conectar");
    conectar.addEventListener("click", ConectarMetamask);



  });


async function ConectarMetamask()
{
    
        // New web3 provider
        if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            try {
                // ask user for permission
                await ethereum.enable();
                // user approved permission
            } catch (error) {
                // user rejected permission
                console.log('user rejected permission');
            }
        }
        // Old web3 provider
        else if (window.web3) {
            window.web3 = new Web3(web3.currentProvider);
            // no need to ask for permission
        }
        // No web3 provider
        else {
            console.log('No web3 provider detected');
        }
        ActualizarDasboard();
        ObtenerCuenta();
        GlobaRank();

        
          
}
async function TestConection(){
    // New web3 provider
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // ask user for permission
            await ethereum.enable();
            // user approved permission
        } catch (error) {
            // user rejected permission
            console.log('user rejected permission');
        }
    }
    // Old web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
    }
}

async function ObtenerCuenta(){
  //alert("pepo");
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
       
    }
    // Old web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
    }
    
    address = (await web3.eth.getAccounts())[0];
    
    const balancevlx = web3.utils.fromWei(
        await web3.eth.getBalance(address) // Balance is in wei
      );
      const contract1 = new web3.eth.Contract(JSON.parse(abiXen), contrato);
      const MaxTerm = await contract1.methods.getCurrentMaxTerm().call();
    const MaxTerm1=MaxTerm/86400;
      var  Mterm = document.getElementById("term");
      Mterm.value=MaxTerm1;

     const aux=parseFloat(balancevlx);
     const aux1=aux.toFixed(3);
     

      var balanceVLX = document.getElementById("balancevlx");
      balanceVLX.textContent=aux1;
      
      const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
      const balancevlXen = await contract.methods.balanceOf(address).call();
      var  balancevlxen = document.getElementById("balancevlxen"); 
      const resultado = Number(balancevlXen) / 10**18;
      balancevlxen.textContent=resultado;
     
    
  
      
        var primeros =  address.substring(0,6);
        var ultimos = address.slice(-6);
            var conectar = document.getElementById("conectar");          
            // Cambia el valor del botón
            conectar.value = primeros + "........."+ ultimos;    


}   


 function Dashboard(){
    
   ObtenerCuenta();
}


async function Mint()
{ 
      TestConection();

    
   const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);
    //claimRank
    
    var aux=document.getElementById('term');
    var term=parseInt(aux.value);
    if (isNaN(term) || term % 1 !== 0) {
        alert("El valor debe ser entero.");
      } else {
        address = (await web3.eth.getAccounts())[0];
        
        const receipt = await contract.methods.claimRank(term).send({
            from: address,
            gas: 200000, // límite de gas para la transacción
            //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
            //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
            //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
          });
          
      }
      ActualizarDasboard();
}


async function GlobaRank()
{ 
      TestConection();

   
    const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
    const receipt = await contract.methods.globalRank().call();
    
    globalrank=receipt;
    
    const gRank = document.getElementById('gRank');
     gRank.textContent = receipt;
     
}
async function LiquidSupply()
{ 
      TestConection();

   
    const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
    const receipt = await contract.methods.totalSupply().call();
    globalrank=receipt;
    const gRank = document.getElementById('liquid');
    const resultado = Number(receipt) / 10**18;
    const liquidy=Math.floor(resultado);
    //alert(liquidy);
     gRank.textContent =liquidy ;
}

function ActualizarDasboard()
{
    ObtenerCuenta();
    GlobaRank();
    UserMints();
    LiquidSupply();
    UserStakes();
   
}
async function ClaimRewards()
{ 
      TestConection();

   
    const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
    const receipt = await contract.methods.claimMintReward().send({
        from: address,
        gas: 600000, // límite de gas para la transacción
        //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
        //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
        //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
      });
    ActualizarDasboard();
}


async function UserMints()
{ 
      TestConection();
      address = (await web3.eth.getAccounts())[0];
   
    const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
    const receipt = await contract.methods.userMints(address).call();
    const CAMP = await contract.methods.getCurrentAMP().call();
    const EAAR = await contract.methods.getCurrentEAAR().call();
    
    uterm=receipt[1];
    maturityTs=receipt[2];
    crank=receipt[3];
    amplifier=receipt[4];
    eaaRate=receipt[5];
    
    

    if(receipt[0]!=="0x0000000000000000000000000000000000000000"){
      
        
        document.getElementById("bmint").disabled=true;
        
        var reward=calculateMintReward(crank,uterm,maturityTs,amplifier,eaaRate);
        
        const reward1=((await reward).toString());
       
        //const reward2=reward1.slice(0,-1);
        
        document.getElementById("claimr").value=reward1 +" vlXEN to Claim";
       
        //document.getElementById("claimr").value=(await reward).toString() +" vlXEN to Claim";
       

        
        
    }
    else{
        document.getElementById("bmint").disabled=false;
        document.getElementById("claimr").disabled=true;
    }
    
}

async function calculateMintReward(cRank, term, maturityTs, amplifier, eeaRate) {
    
  TestConection();
  GlobaRank();
  //const timestamp = null;
  //
  
  
  const block = await web3.eth.getBlock('latest');
  const timestamp = block.timestamp;
    
 
    
  const secsLate = timestamp - maturityTs;
  //
  
  
  const penalty = Penalty(secsLate);
  
  const rankDelta = Math.max(globalrank - cRank, 2);
  const aux=1000;
  const EAA =BigInt (aux) + BigInt(eeaRate);
  //alert(EAA);
  const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
  const reward =await contract.methods.getGrossReward(rankDelta,amplifier,term,EAA).call();
  
  //const reward = getGrossReward(rankDelta, amplifier, term, EAA);
   const resultado = Math.floor((reward * (100 - penalty)) / 100);
   calculateTimeLeft(maturityTs);
   return resultado;
}

function Penalty(secsLate) {
  // =MIN(2^(daysLate+3)/window-1,99)
  const daysLate = Math.floor(secsLate / 86400);
  if (daysLate > 7 - 1) return 99;
  const penalty = (Math.pow(2, daysLate + 3)) / 7 - 1;
  return Math.min(penalty, 99);
}


function calculateTimeLeft(maturityTimeInSeconds) {
    const maturityTime = maturityTimeInSeconds * 1000; // Convertir a milisegundos
    const currentTime = new Date().getTime(); // Obtener la hora actual en milisegundos
    const remainingTime = maturityTime - currentTime;
    const count=document.getElementById('countdown');
    if (remainingTime < 0) {
        count.textContent='El tiempo ha expirado';
    } else {
      const seconds = Math.floor((remainingTime / 1000) % 60);
      const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
      const hours = Math.floor((remainingTime / 1000 / 60 / 60) % 24);
      const days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
      
      count.textContent=`Calim in ${days} dias, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
    }
  }

  function Limpiar(){

    const walletShare=document.getElementById('textShare').value;
    if(!(/^(0x)?[0-9a-fA-F]{40}$/.test(walletShare))){
    document.getElementById('textShare').value="";}


    document.getElementById('amountStake').value="";
    
  }
  async function ClaimShare(){
         
        TestConection();       
            
    const walletShare=document.getElementById('textShare').value;
    const porcent=document.getElementById('textPorcent').value;
   //
    if (/^(0x)?[0-9a-fA-F]{40}$/.test(walletShare)) {
        const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
        const receipt = await contract.methods.claimMintRewardAndShare(walletShare,porcent).send({
            from: address,
            gas: 200000, // límite de gas para la transacción
            //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
            //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
            //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
          });
        ActualizarDasboard();
    } else {
      alert('La direccion no es valida');
    }
    
        
      }
      
      
      
      async function Stake(){
         
        TestConection();       
            
    const AmountStake=document.getElementById('amountStake').value;
    const TermStake=document.getElementById('termStake').value;
   //
    const AmountStake1=BigInt( AmountStake * (10 ** 18));
    //alert(AmountStake1);
        const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
        const receipt = await contract.methods.stake(AmountStake1,TermStake).send({
            from: address,
            gas: 200000, // límite de gas para la transacción
            //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
            //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
            //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
          });
        ActualizarDasboard();           
      }

      async function UserStakes(){
         
        TestConection();       
        address = (await web3.eth.getAccounts())[0];
      const userStaked=document.getElementById('userstaked');
      
        const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
        const receipt =await contract.methods.userStakes(address).call();
        //alert(receipt);
        userStaked.textContent= receipt[2]/10**18;
                  
      }
      async function ClaimStaked(){
         
        TestConection();       
        address = (await web3.eth.getAccounts())[0];
      const userStaked=document.getElementById('userstaked');
      
        const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
        const receipt =await contract.methods.withdraw().send({
          from: address,
          gas: 200000, // límite de gas para la transacción
          //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
          //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
          //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
        });
        //alert(receipt);
        ActualizarDasboard();
                  
      }
