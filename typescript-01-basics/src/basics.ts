/* ELSŐ feladat */
/*  Hozz létre egy Video classt title, uploader és seconds fieldekkel.
    Legyen egy watch metódusa is, ami kiírja a film címét és a perceket.
    Hozz létre két példányt a classból és hívd meg mindkettőnek a watch metódusát. */



    class Video {
        private _title: string;
        private _uploader: string;
        private _seconds: number;

        constructor(title:string, uploader: string, seconds:number){
            this._title = title;
            this._uploader = uploader;
            this._seconds = seconds;
        }

        public watch():string {
            return `title: ${this._title}, length: ${Math.floor(this._seconds / 60)} min`
        }
    
    }

    const movie01 = new Video('Lord of the Rings', 'Tibi', 7200);
    const movie02 = new Video('Jurassic Park', 'James Cameron', 4000);

    console.log(movie01.watch());
    console.log(movie02.watch());
    
    
    
    /* MÁSODIK feladat */
    /*  Hozz létre egy Person classt, name és age fieldekkel.
        Legyen egy describe metódusa, ami visszaadja a fieldek értékét.
        Hozz létre két példányt, majd hívd meg mindkettőn a describe metódust. 
        */
    
    class Person {

    }

    
    
    /* HARMADIK feladat*/
    /*  Hozz létre egy User interface-t, name, age és position (feltételes) fieldekkel.
        Hozz létre egy tömböt ami két user konkrét user objektumot tartalmaz, 
        majd egy függvény segítségével írd ki a userek nevét és a korukat. 
        
        hozz létre egy role enumot, admin és user értékekkel, majd definiáld az  interfaceben és implementáld classban*/
    
    
    enum Role {
        Admin,
        User
    }

    interface User {
        name: string;
        age: number;
        position?: string;
        role?: Role;
    }
    
    
    const users: Array<User> = [
        {
            name: 'Réka',
            age: 28,
            role: Role.Admin
        },
        {
            name: 'Gergő',
            age: 30,
            role: Role.User,
            position: 'developer',
        }
    ]

    const printUserNameAge = (userArr: User[]) => {
        userArr.forEach(user => console.log(user.name, user.age));
    }

    printUserNameAge(users);