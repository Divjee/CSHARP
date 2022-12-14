# Person/Apartment/Building

Mājasdarba uzdevums sastāv no trīs galveniem objektiem, Builindg, person un Apartment. Katram Apartment ir piešķirts Building Id, katrai Personai ir piešķirts ApartmentId.

Lai projektu startētu varam atvērt termināli un aiziet līdz Frontend.UI mapei un terminālī ierakstīt koamandu ng serve. 
![image](https://user-images.githubusercontent.com/99561972/207614492-c3bb810c-9294-44f2-b533-b7070c1007dd.png)

Lai palaistu C# projektu vēlams aiziet līdz PersonAPI pirmajai mapei un palaist PersonAPI.sln failu, kas jums atvērs jūsu Visual Studio. 
![image](https://user-images.githubusercontent.com/99561972/207612734-9479ab9b-ec9b-44af-b93d-8ee1fe4dc4e9.png)
Šeti mēs varam palaist vēlamos mājasdarbus PersonAPI vai ArrayTask(pirmais uzdevums)

Pirms tiek palaists projekts ir jāsavienojas ar datubāzi, jūsu server vārad jābūt tādam pašam, kāds norādīts connection string, kas atrodas appsetting.json failā.
![image](https://user-images.githubusercontent.com/99561972/207613484-5d5b5ce3-a0c2-42ec-adf9-e66a8e22bfb3.png)

Pēc tam, lai pievienotu jaunu migrāciju, iekš package manager console jāieraksta "add-migration JūsuDatubāzesVārds", pēc tam update-database.
Šim mājasdarbam izmantoju MicrosoftSQL server manegement studio. 

Tagad mēs varam palaist projektu :) 

Aizejot uz frontend localhost doto LocalHost mēs redzēsim trīs sadaļas

![image](https://user-images.githubusercontent.com/99561972/207614809-c4836d0a-89f6-4c0c-8eb7-28a2eacb617c.png)

Kur mēs uzpiežot kādai no sadaļai varam pievienot jaunu Building/Personu vai Apartment. 

![image](https://user-images.githubusercontent.com/99561972/207615920-3ce14981-2c90-4d73-b1d5-5c0bf5e81075.png)

Datus var gan rediģēt un idzēt. 

![image](https://user-images.githubusercontent.com/99561972/207616293-ddc8e669-5531-42e1-ae2c-3b39665db6c3.png)

Personas datus pievienojot, personas kods tiek pieņemts Latvijas standarta persona koda veidā 111111-11111 vai 11111111111, epasts tiek pieņemts norādot pareizu epasta formātu, Date of Birth tiek pieņemts trijos formātos (dd.MM.yyyy, dd-MM-yyyy, dd/MM/yyyy).

UI daļa darbojas kopā ar datubāzi. 

![image](https://user-images.githubusercontent.com/99561972/207617794-175828b9-e22f-4daa-bd28-746937208280.png)

Projektam ir lietas, kuras var pielabot, kā piemēram, ja tiek idzēsts Building, tad rediģēt BuildingId sadaļu apartment, tas pats ar Personu un Apartment.
