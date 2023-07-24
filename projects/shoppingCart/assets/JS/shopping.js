let products = [
    {
        productName: "Iphone 13 Pro Max 128 GB",
        productId: 1,
        productPrice: 46000,
        productStock: 14,
        productCategory: "Telefon"
    },
    {
        productName: "Arçelik 392 Lt. No Frost Buzdolabı",
        productId: 2,
        productPrice: 15000,
        productStock: 8,
        productCategory: "Beyaz Eşya"
    },
    {
        productName: "Samsung 139 Ekran Crystal 4K Ultra HD Led TV",
        productId: 3,
        productPrice: 18000,
        productStock: 4,
        productCategory: "Televizyon"
    },
    {
        productName: "Dyson V15 Detect Absolute Kablosuz Süpürge",
        productId: 4,
        productPrice: 21000,
        productStock: 0,
        productCategory: "Elektrikli Ev Aletleri"
    },
    {
        productName: "Monster Abra A5 V19.4.5 İntel Core i5 12500H 16GB Ram 500GB SSD Notebook",
        productId: 5,
        productPrice: 20000,
        productStock: 9,
        productCategory: "Bilgisayar"
    },
    {
        productName: "Nikon D3500 18-55Mm Vr Fotoğraf Makinesi",
        productId: 6,
        productPrice: 14000,
        productStock: 11,
        productCategory: "Foto ve Kamera"
    },
    {
        productName: "HP Laser MFP 135w Yazıcı",
        productId: 7,
        productPrice: 4000,
        productStock: 27,
        productCategory: "Yazıcılar"
    },
    {
        productName: "Sony Playstation 5 Oyun Konsolu (İthalatçı Garantili)",
        productId: 8,
        productPrice: 16000,
        productStock: 3,
        productCategory: "Oyun Konsolları"
    },
    {
        productName: "Baymak Elegant Prime 12 12000 BTU R32 Duvar Tipi Inverter Klima",
        productId: 9,
        productPrice: 13000,
        productStock: 14,
        productCategory: "Klima ve Isıtıcılar"
    },
    {
        productName: "Arzum Ar1092 Mano El Blender Seti",
        productId: 10,
        productPrice: 700,
        productStock: 23,
        productCategory: "Küçük Ev Aletleri"
    },
    ];
    
    let categories = [
        {
            categoryId: 1,
            categoryName: "Telefon"
        },
        {
            categoryId: 2,
            categoryName: "Beyaz Eşya"
        },
        {
            categoryId: 3,
            categoryName: "Televizyon"
        },
        {
            categoryId: 4,
            categoryName: "Elektrikli Ev Aletleri"
        },
        {
            categoryId: 5,
            categoryName: "Bilgisayar"
        },
        {
            categoryId: 6,
            categoryName: "Foto ve Kamera"
        },
        {
            categoryId: 7,
            categoryName: "Yazıcılar"
        },
        {
            categoryId: 8,
            categoryName: "Oyun Konsolları"
        },
        {
            categoryId: 9,
            categoryName: "Klima ve Isıtıcılar"
        },
        {
            categoryId: 10,
            categoryName: "Küçük Ev Aletleri"
        }
    
    ];
    
    let cart = [
        // Sepete eklenen ürünlerin diziye eklenmesi için içeriği boş bir cart isimli dizi oluşturduk.
    ];
    let totalPrice= 0;  // Sepet toplamını kontrol etmek için değişkenimizi tanımlıyoruz.
    
    
    function showProducts()
    {
        for (let i = 0; i < products.length; i++) { // Stoğu biten ürünün listelenmesini engelliyoruz.
            if (products[i].productStock > 0) {     // Sadece stoğu olan ürünlerimiz(0 dan büyük ise) listeleniyor.
              console.log(products[i].productName); // Stoğu var ise ürün ismiyle listeleniyor.
            }
          }      
        console.log(products); // Stoğu bitenler dahil olmak üzere tüm ürünlerimizi listeliyoruz.
    }
    
    function showCategories(){
        console.log(categories); // Kategori listesini görüntülemek için bir fonksiyon oluşturduk.
    }
    
    function showCart(){  // Sepetimizi görüntülemek için bir fonksiyon oluşturduk.
        console.log(cart);
        let totalCartPrice = 0; // Sepet toplamını kontrol etmek için değişkenimizi tanımlıyoruz.
    
    cart.forEach(item => {
      totalCartPrice += item.productPrice; // Sepetimizdeki ürünlerin toplam ücretini hesaplamak için her eklenen ürünün fiyatını topluyoruz.
    });
    
    console.log("Sepet Toplamı:", totalCartPrice + "₺");
    };
    
    
    function addCart(productId) {
        let addProduct= Number(document.getElementById("addBasket").value); // Eklenecek olan ürünün productId değerini textboxa girilen değerden alıyoruz.
        let productExists = products.some(function(item) {  // Ürün listemizin içinde "productId" değerine sahip bir ürün olup olmadığını kontrol ediyoruz.
          return item.productId === addProduct;             // some() fonksiyonu bir dizi içinde belirli bir koşulu sağlayan en az bir öğe olup olmadığını kontrol eder.
        });
      
        if (!productExists) {
          console.log("Ürün listesinde olmayan bir ürün sepete eklenemez!"); // Eğer ürün listemizde "productId" değerine sahip bir ürünümüz yoksa, ürünün eklemesini engelliyoruz.
          return;
        }
      
        let product = products.find(function(item) {  // Ürün listemizin içinde "productId" değerine sahip bir ürün varsa, bu ürünü product değişkenine atıyoruz.
          return item.productId === addProduct;       // find() fonksiyonu, bir dizi içinde belirli bir koşulu sağlayan ilk öğeyi bize döndürür.
          
        });
        if (product.productStock < 1) {   // Eğer sepete eklenmek istenen ürünün stoğu yoksa eklenmemesini sağlıyoruz.
            console.log("Ürün stoğu yok.");
        }
        else {
        cart.push(product); // Eklenmek istenen ürün listemizde varsa ve stoğu yeterliyse cart dizimize yani sepete eklenmesini sağlıyoruz.
        totalPrice += product.productPrice; // Sepete eklenen ürünlerimizin toplam fiyatlarını hesaplıyoruz.
        console.log("Ürün sepete eklendi: ", product);
        product.productStock --; // Sepete eklenen ürünümüzün stoğunun 1 tane eksilmesini sağlıyoruz.
        // console.log("Sepetteki toplam fiyat: " + totalPrice + "₺");   Ürün eklendikten sonra sepetin toplam fiyatını görmek için kullanıyoruz.
        let basketCount= document.getElementById("basketCount");
        basketCount.style.backgroundColor= "#ff3636"
        basketCount.innerHTML = cart.length;
        }
        
      };
    
    function deleted(){
    
        let productIdToRemove = Number(document.getElementById("addBasket").value); // Silinecek olan ürünün Id numarasını textboxa girilen değerden alıyoruz.
    
        let index = cart.findIndex(product => product.productId === productIdToRemove); // Silmek istediğimiz öğenin id numarası ile değişkenimizi eşitliyoruz.
        // findIndex() fonksiyonu bir dizinin elemanlarında istediğimiz koşulu sağlayan ilk öğenin dizin numarasını bize döndürür.
    
        if (index !== -1) { // İndex değerimizin "-1" e eşit olması aradığımız öğenin dizimizde olmadığı anlamına geliyor. Değerimiz -1 olmadığı zaman splice() fonksiyonu devreye giriyor.
        let removedProduct = cart.splice(index, 1)[0]; // Index değerimizden başlayarak 1 öğe siliyoruz.(Splice fonksiyonuna girilen ilk değer başlangıç öğesini, 2. değer ise kaç öğenin silineceğini belirler.)
        
      
        
        let product = products.find(item => item.productId === removedProduct.productId); // Silmek istediğimiz öğenin id numarası ile değişkenimizi eşitliyoruz.
        product.productStock += 1; // Sepetten çıkarttığımız ürünün stoğunun 1 artmasını sağlıyoruz.
      }
        console.log(cart);
        let basketCount= document.getElementById("basketCount");
        basketCount.style.backgroundColor= "#ff3636"
        basketCount.innerHTML = cart.length;
    };
    
    function addProduct() {
        let productName = document.getElementById("productName").value; // İlgili textboxa girilen değeri değişkene atıyoruz.
        // let productID = document.getElementById("productID");
        let productPrice = document.getElementById("productPrice").value; // İlgili textboxa girilen değeri değişkene atıyoruz.
        let productStock = document.getElementById("productStock").value; // İlgili textboxa girilen değeri değişkene atıyoruz.
        let productCategory = document.getElementById("productCategory").value; // İlgili textboxa girilen değeri değişkene atıyoruz.
    
        let LastId = Math.max(...products.map(p => p.productId)); // Math.max() fonksiyonu ile products dizimizdeki en büyük productId değerine sahip ürünü LastId değişkenine atıyoruz.
        // map() fonksiyonu dizi içerisindeki öğeleri dönüştürmek, üzerlerinde işlem yapmak için kullanılır. Biz burada productId değerlerini ayrı bir diziye dönüştürdük.
        
        if (productName === "" || productPrice === "" || productStock === "" || productCategory === "") { // Ürün ekleme ekranında tüm alanların eksiksiz 
        alert("Lütfen tüm alanları eksiksiz doldurunuz!");                                                   // doldurulmasını sağlıyoruz.
        return false;
        }
        products.push(   // Kullanıcıların yeni ürün eklemek için ilgili "textbox" lara girdikleri değerleri dizimize ekliyoruz.
            {
            productName: productName,
            productId: LastId + 1, // Ürün id değerinin otomatik artmasını sağlıyoruz.(Input özelliğimiz disabled durumda)
            productPrice: Number(productPrice), // Girilen değeri sayıya(integer) dönüştürüyoruz.
            productStock: Number(productStock), // Girilen değeri sayıya(integer) dönüştürüyoruz.
            productCategory: productCategory
            }
        )
        console.log(products);
    };
    
    function addCategory() {
        // let categoryId = document.getElementById("categoryId").value;
        let categoryName = document.getElementById("categoryName").value;
        let LastCategoryId = Math.max(...categories.map(p => p.categoryId)); // Categories dizimizdeki en büyük categoryId değerine sahip ürünü LastCategoryId değişkenine atıyoruz.
    
        if (categoryName === "") { // Kategori adı kısmının boş bırakılmamasını sağlıyoruz.
            alert("Lütfen tüm alanları eksiksiz doldurunuz!");
            return false;
        }
    
        categories.push( // Kullanıcıların yeni kategori eklemek için ilgili "textbox" lara girdikleri değerleri dizimize ekliyoruz.
            {
                categoryId: LastCategoryId + 1, // Kategori id değerinin otomatik artmasını sağlıyoruz.(Input özelliğimiz disabled durumda)
                categoryName: categoryName
            }
        )
        console.log(categories);
    };
    
    
    
    
    
    
    
    
    
    
    
    