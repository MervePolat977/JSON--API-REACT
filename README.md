# JSON--API-REACT

Bu repository'de Json Api kullanarak https://jsonplaceholder.typicode.com/users adresindeki verileri React kullanarak çektik. Bu adresteki verikerden sade name ve username değişkenlerini aldık. 

-----------------------------------------------------------------------------------------
# KURULUMLAR  
Bu projeyi çalıştırmak için Node.js dosyalarının yüklü olması gerekiyor. İnternetten araştırma yaparak kurulumunu yapabilirsinz.  
1-Node.js dosyasının yüklü olup olmadığını öğrenmek için Visual Studio Code'da terminali açın.  
2-Terminalde 'node -v' yazın. Eğer yüklüyse kaçıncı versiyonunun yüklü olduğunu görebilirsiniz. Yüklü değilse, Node.js kurulumunu yapınız.   
3-Eğer yüklüyse böyle gözükür:  
![image](https://user-images.githubusercontent.com/75504698/224539446-f549d984-6e68-469b-9bae-6c329e2b60bf.png)

4-Node kurulumunu yaptıktan sonra,terminalde 'npx create-react-app my-app' komutunu kullanarak bir React uygulaması oluşturabilirsiniz. 'my-app' gibi kendinize özgü bir isim verebilirsiniz.  

5-Daha sonra, src klasörünün içinde App.js dosyasını oluşturun ve aşağıdaki kodu ekleyin:  
![image](https://user-images.githubusercontent.com/75504698/224539622-fbcbb8ab-d25d-4c45-8ec7-0dc05ff80071.png)

------------------------------------------------------------------------

# App.js Dosyası   
'''js
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
'''



----
# Verileri Aldığımız Sayfa
https://jsonplaceholder.typicode.com/users  
![image](https://user-images.githubusercontent.com/75504698/224540231-3746dac9-0af5-4af4-af79-ef89ec287586.png)

----

# Oluşturduğumuz Web Sayfamızın Görüntüsü  
![image](https://user-images.githubusercontent.com/75504698/224540150-7b21af0b-a809-4a3c-9561-1f2ed76b4628.png)
