## Supply and Demand App (for demo)

### Developer ortamı için izlenmesi gereken adımlar

Aşağıda sıralanan uygulamalar PC'ye kurulmalıdır.

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) (LTS versiyonu önerilir.)

Aşağıdaki komut satırını terminal'e yazarak Node.js'in başarılı bir şekilde yüklenip yüklenmediği kontrol edilebilir.

```terminal
node -v
```

Cevap olarak kurduğunuz Node.js versiyonu dönmelidir.

Yukarıdaki yükleme adımları tamamlandıktan sonra aşağıdaki komut satırları takip edilerek kaynak kodlar PC'ye çekilebilir.

```terminal
cd .\Desktop\
git clone https://github.com/yagizhanNY/supply-and-demand.git
```

Kodlar PC'ye çekildikten sonra aşağıdaki komut satırları çalıştırılmalıdır.

```terminal
npm install -g @angular/cli
npm install -g @ionic/cli
cd .\supply-and-demand\
npm install
ionic serve -l
```

Tüm komutlar sağlıklı bir şekilde çalışması durumunda web browserda hem android hem de ios versiyonlarının çalıştığı bir arayüz açılacaktır.

### Android APK oluşturmak için gerekli adımlar

İlgili işlem için aşağıdaki videoda yapılan işlemler **Node.js kurulumuna kadar** takip edilmelidir.

https://www.youtube.com/watch?v=CWOLZBu7ySk&ab_channel=CodeSwag
