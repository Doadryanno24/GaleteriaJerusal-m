// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAhFm-UjZbk7bnONOJTKFlh6d4nkoQ9gZg",
  authDomain: "futebol-ao-vivo-ebfd8.firebaseapp.com",
  databaseURL: "https://futebol-ao-vivo-ebfd8-default-rtdb.firebaseio.com",
  projectId: "futebol-ao-vivo-ebfd8",
  storageBucket: "futebol-ao-vivo-ebfd8.appspot.com",
  messagingSenderId: "946577518523",
  appId: "1:946577518523:web:c82505eef0328ddabade9e",
  measurementId: "G-XPFLVBESV9"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function App() {
  const produtos = [
    { nome: "Galeto inteiro", preco: 40 },
    { nome: "Banda", preco: 20 },
    { nome: "Toscana (unid.)", preco: 3 }
  ];

  const pedirItem = (item) => {
    const pedido = {
      item: item.nome,
      preco: item.preco,
      status: "pendente",
      data: new Date().toLocaleString()
    };

    database.ref("pedidos").push(pedido);
    alert(`Pedido de ${item.nome} enviado!`);
  };

  const cancelar = () => {
    alert("Pedido cancelado.");
  };

  return (
    <div>
      <header>
        <img src="https://i.imgur.com/ZQZSWrt.png" className="logo" />
        <div className="icons">
          <img src="https://img.icons8.com/ios-filled/50/search--v1.png" />
          <img src="https://img.icons8.com/ios-filled/50/menu--v1.png" />
        </div>
      </header>

      <h1>Galeteria Jerusalém</h1>

      {produtos.map((item, index) => (
        <div className="card" key={index}>
          <h2>{item.nome}</h2>
          <p>R$ {item.preco.toFixed(2)}</p>
          <button onClick={() => pedirItem(item)}>Pedir</button>
          <button className="cancel" onClick={cancelar}>Cancelar</button>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));