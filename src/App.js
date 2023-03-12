//React kütüphanesinin React ve Component bileşenlerini projeye dahil eder.
import React, { Component } from 'react';
//App.css dosyasını projeye dahil eder.
import './App.css';


/*App adlı bir bileşen(component) sınıfı tanımlar. Bu bileşen, Component sınıfından 
türetilir ve render fonksiyonu ile birlikte gelir. constructor fonksiyonu, 
bileşen ilk oluşturulduğunda çalıştırılır ve state adlı bir nesne oluşturur.*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      users: [],
    };
  }

  /* bileşenin ilk kez yüklendiğinde çağrılan bir React yaşam döngüsü yöntemidir.
   Bu yöntem, JSON verilerini almak için bir HTTP isteği yapar ve sonucunu 
   state nesnesine ekler.*/
  /*Bu örnekte, bileşen monte edildiğinde, fetch fonksiyonu kullanılarak "https://jsonplaceholder.typicode.com/users" 
  adresine bir istek gönderilir. Bu adres, JSON verisi içeren bir API sunucusudur. fetch fonksiyonu, asenkron bir işlemdir 
  ve sonucun elde edilmesi için beklememize neden olabilir.

  /* bileşenin ilk kez yüklendiğinde çağrılan bir React yaşam döngüsü yöntemidir.
   Bu yöntem, JSON verilerini almak için bir HTTP isteği yapar ve sonucunu 
   state nesnesine ekler.*/
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data, loading: false }))
      .catch(error => console.log(error));
  }


  /* bileşenin içeriğini render eder. Bu durumda, loading ve users 
  durum değişkenlerini kullanarak bir yükleme durumunu veya kullanıcıların 
  listesini render eder.*/
  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <div>{user.name}</div>
                <div>{user.username}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

//App bileşenini dışa aktarır ve diğer dosyalarda kullanılmasını sağlar.
export default App;
