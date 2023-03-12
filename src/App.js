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

  await anahtar kelimesi, bir Promise nesnesinin sonucunu beklemek için kullanılır. Bu durumda, fetch fonksiyonu bir Promise döndürür 
  ve await anahtar kelimesi sonucun hazır olmasını bekleyecektir.

  response.json() yöntemi, yanıtın JSON verilerini okumak için kullanılır. Bu yöntem de asenkron bir işlemdir ve 
  sonucun hazır olması için beklememiz gerekir.

  JSON verileri, data değişkenine atanır ve setState yöntemi kullanılarak users ve loading bileşen durumları
  güncellenir. users bileşen durumu, API'den alınan kullanıcı verilerini içerirken, loading bileşen durumu, 
  verilerin yüklenme durumunu belirlemek için kullanılır.

 Böylece, componentDidMount yöntemi, bileşen monte edildiğinde, API'den verileri yükler ve bileşen durumlarını günceller.*/
  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    this.setState({ users: data, loading: false });
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
