import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Includes/Footer";
import Menubar from "./Components/Includes/Menubar";
import About from "./Components/About";
import TopMedicalUniversity from "./Components/TopMedicalUniversity";
import MbbsInBelarus from "./Components/Mbbs-In-Abroad/MbbsInBelarus";
import MbbsInChina from "./Components/Mbbs-In-Abroad/MbbsInChina";

import MbbsInGeorgia from "./Components/Mbbs-In-Abroad/MbbsInGeorgia";
import MbbsInKazakhstan from "./Components/Mbbs-In-Abroad/MbbsInKazakhstan";
// import YerevanHaybusakUniversity from "./Components/Armenia/YerevanHaybusakUniversity";
// import BelarusianStateMedicalUniversity from "./Components/Belarus/BelarusianStateMedicalUniversity";
// import VitebskStateMedicalUniversity from "./Components/Belarus/VitebskStateMedicalUniversity";
// import ChinaMedicalUniversity from "./Components/China/ChinaMedicalUniversity";
// import DalianMedicalUniversity from "./Components/China/DalianMedicalUniversity";
// import FujianMedicalUniversity from "./Components/China/FujianMedicalUniversity";
// import KunmingMedicalUniversity from "./Components/China/KunmingMedicalUniversity";
// import NanjingMedicalUniversity from "./Components/China/NanjingMedicalUniversity";
// import AinShyamsUniversity from "./Components/Egypt/AinShyamsUniversity";
// import CairoUniversity from "./Components/Egypt/CairoUniversity";
// import YerevanStateMedicalUniversity from "./Components/Armenia/YerevanStateMedicalUniversity";
// import InternationalMedicalSchool from "./Components/Kazaksthan/InternationalMedicalSchool";
// import JscNationalMedicalUniversity from "./Components/Kazaksthan/JscNationalMedicalUniversity";
// import AlFarabiNationalMedicalUniversity from "./Components/Kazaksthan/AlFarabiNationalMedicalUniversity";
// import OshStateMedicalUniversity from "./Components/Kyrgyzstan/OshStateMedicalUniversity";
// import SalymbekovUniversity from "./Components/Kyrgyzstan/SalymbekovUniversity";
// import DavaoMedicalCollege from "./Components/Philippines/DavaoMedicalCollege";
// import EmilioAguinaldoCollege from "./Components/Philippines/EmilioAguinaldoCollege";
// import OurLadyOfFatimaUniversity from "./Components/Philippines/OurLadyOfFatimaUniversity";
// import UniversityOfPerpetualHelp from "./Components/Philippines/UniversityOfPerpetualHelp";
// import AmaUniversity from "./Components/Philippines/AmaUniversity";
// import Medicaluniversityofgdansk from "./Components/Poland/MedicalUniversityOfGdansk";
import TexilaAmericanUniversityCollege from "./Components/USA/TexilaAmericanUniversityCollege";
// import MbbsUzbekistan from "./Components/Mbbs-In-Abroad/MbbsUzbekistan";
// import FerganaMedicalInstitute from "./Components/Uzbekistan/FerganaMedicalInstitute";
// import AkakiTsereteliState from "./Components/Gerogia/AkakiTsereteliState";
// import BatumiShotaRustaveliStateMedicalUniversity from "./Components/Gerogia/BatumiShotaRustaveliStateMedicalUniversity";
// import CaucasusInternationalMedicalUniversity from "./Components/Gerogia/CaucasusInternationalMedicalUniversity";
// import DavidTvildianiMedicalUniversity from "./Components/Gerogia/DavidTvildianiMedicalUniversity";
// import EuropeanUniversity from "./Components/Gerogia/EuropeanUniversity";
// import GeorgianAmericanUniversity from "./Components/Gerogia/GeorgianAmericanUniversity";
// import IvaneJavakhishvili from "./Components/Gerogia/IvaneJavakhishvili";
// import PetreShotadzeTbilisiMedicalAcademy from "./Components/Gerogia/PetreShotadzeTbilisiMedicalAcademy";
// import TbilisiStateMedicalUniversity from "./Components/Gerogia/TbilisiStateMedicalUniversity";
// import UniversityOfGeorgiaSchool from "./Components/Gerogia/UniversityOfGeorgiaSchool";
// import BashkirStateMedicalUniversity from "./Components/Russia/BashkirStateMedicalUniversity";
// import CrimeaStateMedicalUniversity from "./Components/Russia/CrimeaStateMedicalUniversity";
// import IngushStateMedicalAcademy from "./Components/Russia/IngushStateMedicalAcademy";
// import KabardinoBalkarianStateMedicalUniversity from "./Components/Russia/KabardinoBalkarianStateMedicalUniversity";
// import KazanFederalUniversity from "./Components/Russia/KazanFederalUniversity";
// import KirovStateMedicalUniversity from "./Components/Russia/KirovStateMedicalUniversity";
// import KazanStateMedicalUniversity from "./Components/Russia/KazanStateMedicalUniversity";
// import KruskStateMedicalUniversity from "./Components/Russia/KruskStateMedicalUniversity";
// import LobachevskyStateMedicalUniversity from "./Components/Russia/LobachevskyStateMedicalUniversity";
// import VolgograStateMedicalUniversity from "./Components/Russia/VolgograStateMedicalUniversity";
// import BlackSeaNationalMedicalUniversity from "./Components/Ukraine/BlackSeaNationalMedicalUniversity";
// import BukovinianStateMedicalUniversity from "./Components/Ukraine/BukovinianStateMedicalUniversity";
// import DnipropetrovskStateMedicalUniversity from "./Components/Ukraine/dnipropetrovskStateMedicalUniversity";
// import KharkivNationalMedicalUniversity from "./Components/Ukraine/KharkivNationalMedicalUniversity";
// import KyivMedicalUniversity from "./Components/Ukraine/KyivMedicalUniversity";
// import OoBogomoletsNationalMedicalUniversity from "./Components/Ukraine/OoBogomoletsNationalMedicalUniversity";
// import PoltavaStateMedicalUniversity from "./Components/Ukraine/PoltavaStateMedicalUniversity";
// import TarasShevchenkoNationalMedicalUniversity from "./Components/Ukraine/TarasShevchenkoNationalMedicalUniversity";
// import VinnitsaNationalMedicalUniversity from "./Components/Ukraine/VinnitsaNationalMedicalUniversity";
// import VNKarazinKharkivNationalMedicalUniversity from "./Components/Ukraine/VNKarazinKharkivNationalMedicalUniversity";
// import ZaporizhzhiaStateMedicalUniversity from "./Components/Ukraine/ZaporizhzhiaStateMedicalUniversity";
// import LvivNationalMedicalUniversity from "./Components/Ukraine/LvivNationalMedicalUniversity";
// import KharkivInternationalMedicalUniversity from "./Components/Ukraine/KharkivInternationalMedicalUniversity";
// import IvanoFrankviskNationalMedicalUniversity from "./Components/Ukraine/IvanoFrankviskNationalMedicalUniversity";
// import NorthCaucasianStateHumanitarian from "./Components/Russia/NorthCaucasianStateHumanitarian ";
// import NorthOssetianStateMedicalUniversity from "./Components/Russia/NorthOssetianStateMedicalUniversity";
import MbbsInKyrgystan from "./Components/Mbbs-In-Abroad/MbbsInKyrgystan";
import MbbsInPhillipines from "./Components/Mbbs-In-Abroad/MbbsInPhillipines";
import MbbsInPoland from "./Components/Mbbs-In-Abroad/MbbsInPoland";
import MbbsInRussia from "./Components/Mbbs-In-Abroad/MbbsInRussia";
// import MbbsInUkraine from "./Components/Mbbs-In-Abroad/MbbsInUkraine";
import MbbsInUSA from "./Components/Mbbs-In-Abroad/MbbsInUSA";
import MbbsInArmenia from "./Components/Mbbs-In-Abroad/MbbsInArmenia";
import YerevanHaybusakUniversity from "./Components/Armenia/YerevanHaybusakUniversity";
import YerevanStateMedicalUniversity from "./Components/Armenia/YerevanStateMedicalUniversity";
import MbbsInEgypt from "./Components/Mbbs-In-Abroad/MbbsInEgypt";
// import MbbsInBangladesh from "./Components/Mbbs-In-Abroad/MbbsInBangladesh";

function App() {
  return (
    <>
      <Router>
        <Menubar />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/blog" element={<Blog />}></Route> */}
          {/* <Route path="/contact" element={<Contact />}></Route> */}
          <Route
            path="/top-medical-university"
            element={<TopMedicalUniversity />}
          ></Route>
          <Route path="/mbbs-in-armenia" element={<MbbsInArmenia />}></Route>
          <Route path="mbbs-in-armenia">
            <Route
              path="yerevan-haybusak-university"
              element={<YerevanHaybusakUniversity />}
            />
            <Route
              path="yerevan-state-medical-university"
              element={<YerevanStateMedicalUniversity />}
            />
          </Route>
          {/* <Route
            path="/mbbs-in-bangaladesh"
            element={<MbbsInBangladesh />}
          ></Route> */}
          <Route path="/mbbs-in-belarus" element={<MbbsInBelarus />}>
        {/* <Route path="/belarusian-state-medical-university" element={<BelarusianStateMedicalUniversity />} />
        <Route path="/grodno-state-medical-university" element={<GrodnoStateMedicalUniversity />} />
        <Route path="/vitebsk-state-medical-university" element={<VitebskStateMedicalUniversity />} /> */}
        </Route>
        <Route path="/mbbs-in-china" element={<MbbsInChina />}>
        {/* <Route path="/china-medical-university" element={<ChinaMedicalUniversityy />} />
        <Route path="/dalian-medical-university" element={<DalianMedicalUniversity />} />
        <Route path="/fujian-medical-university" element={<FujianMedicalUniversity />} />
        <Route path="/jilin-medical-university" element={<JilinMedicalUniversity />} />
        <Route path="/kunming-medical-university" element={<KunmingMedicalUniversity />} />
        <Route path="/nanjing-medical-university" element={<NanjingMedicalUniversity />} /> */}
         </Route>      
        <Route path="/mbbs-in-egypt" element={<MbbsInEgypt />}> 
        {/* <Route path="/ain-shyams-university" element={<AinShyamsUniversity />} />
        <Route path="/cairo-university" element={<CairoUniversity />} /> */}
        </Route>      
         <Route path="/mbbs-in-georgia" element={<MbbsInGeorgia />}> 
        {/* <Route path="/akaki-tsereteli-state" element={<AkakiTsereteliState />} />
        <Route path="/batumi-shota-rustaveli-state-medical-university" element={<BatumiShotaRustaveliStateMedicalUniversity />} />
        <Route path="/caucasus-international-medical-university" element={<CaucasusInternationalMedicalUniversity />} />
        <Route path="/david-vildiani-medical-university" element={<DavidTvildianiMedicalUniversity />} />
        <Route path="/european-university" element={<EuropeanUniversity />} />
        <Route path="/georgian-american-university" element={<GeorgianAmericanUniversity />} />        
        <Route path="/ivane-javakhishvili" element={<IvaneJavakhishvili />} />        
        <Route path="/petre-shotadze-tbilisi-medical-academy" element={<PetreShotadzeTbilisiMedicalAcademy />} />
        <Route path="/tbilisi-state-medical-university" element={<TbilisiStateMedicalUniversity />} />
        <Route path="/university-of-georgia-school" element={<UniversityOfGeorgiaSchool />} /> */}
        </Route>          
        <Route path="/mbbs-in-kazakhstan" element={<MbbsInKazakhstan />}> 
        {/* <Route path="/al-farabi-national-medical-university" element={<AlFarabiNationalMedicalUniversity />} />
        <Route path="/international-medical-school" element={<InternationalMedicalSchool />} />
        <Route path="/jsc-national-medical-university" element={<JscNationalMedicalUniversity />} /> */}
        </Route>  
        <Route path="/mbbs-in-kyrgystan" element={<MbbsInKyrgystan />}> 
        {/* <Route path="/osh-state-medical-university" element={<OshStateMedicalUniversity />} />
        <Route path="/salymbekov-university" element={<SalymbekovUniversity />} /> */}
        </Route>      
        <Route path="/mbbs-in-phillipines" element={<MbbsInPhillipines />}>
        {/* <Route path="/ama-university" element={<AmaUniversity />} />
        <Route path="/davao-medical-college" element={<DavaoMedicalCollege />} />
        <Route path="/emilio-aguinaldo-college" element={<EmilioAguinaldoCollege />} />
        <Route path="/our-lady-of-fatima-university" element={<OurLadyOfFatimaUniversity  />} />
        <Route path="/university-of-perpetual-help" element={<UniversityOfPerpetualHelp />} /> */}
          
           </Route>      
        <Route path="/mbbs-in-poland" element={<MbbsInPoland />}> 
        {/* <Route path="/medical-university-of-gdansk" element={<Medicaluniversityofgdansk  />} />
        <Route path="/medical-university-of-warsaw" element={<MedicalUniversityOfWarsaw  />} /> */}
        </Route>      
        <Route path="/mbbs-in-russia" element={<MbbsInRussia />}> 
        {/* <Route path="/bashkir-state-medical-university" element={<BashkirStateMedicalUniversity />} />
        <Route path="/crimea-state-medical-university" element={<CrimeaStateMedicalUniversity />} />
        <Route path="/ingush-state-medical-academy" element={<IngushStateMedicalAcademy />} />
        <Route path="/kabardino-balkariand-state-medical-university" element={<KabardinoBalkarianStateMedicalUniversity />} />
        <Route path="/kazan-federal-university" element={<KazanFederalUniversity />} />
        <Route path="/kazan-state-medical-university" element={<KazanStateMedicalUniversity />} />
        <Route path="/kirov-state-medical-university" element={<KirovStateMedicalUniversity />} />
        <Route path="/kemerovo-state-medical-university" element={<Kemerovo State Medical University  />} />
        <Route path="/lobachevsky-state-Medical-University" element={<LobachevskyStateMedicalUniversity />} />
          <Route path="/volgogra-state-medical-university" element={<VolgograStateMedicalUniversity />} />
          <Route path="/north-caucasian-state-humanitarian" element={<NorthCaucasianStateHumanitarian />} />
          <Route path="north-ossetian-state-medical-university" element={<NorthOssetianStateMedicalUniversity />} /> */}


        </Route>              
        {/* <Route path="/mbbs-in-ukraine" element={<MbbsInUkraine />}> 
        <Route path="/black-sea-national-medical-university" element={<BlackSeaNationalMedicalUniversity />} />
        <Route path="/bukovinian-state-medical-university" element={<BukovinianStateMedicalUniversity />} />
        <Route path="/dnipropetrovsk-state-medical-university" element={<DnipropetrovskStateMedicalUniversity />} />
         <Route path="/ivano-frankvisk-national-medical-university" element={<IvanoFrankviskNationalMedicalUniversity />} />
         <Route path="/kharkiv-international-medical-university" element={<KharkivInternationalMedicalUniversity />} />
         <Route path="/kharkiv-national-medical-university" element={<KharkivNationalMedicalUniversity />} />
                 <Route path="/kyiv-medical-university" element={<KyivMedicalUniversity />} />
                 <Route path="/lviv-national-medical-university" element={<LvivNationalMedicalUniversity />} />
                 <Route path="/oo-bogomolets-national-medical-university" element={<OoBogomoletsNationalMedicalUniversity />} />
                 <Route path="/poltava-state-medical-university" element={<PoltavaStateMedicalUniversity />} />  
                 <Route path="/taras-shevchenko-national-medical-university" element={<TarasShevchenkoNationalMedicalUniversity />} />  
                 <Route path="/vinnitsa-national-medical-university" element={<VinnitsaNationalMedicalUniversity />} />
                         <Route path="/v-n-karazin-kharkiv-national-medical-university" element={<VNKarazinKharkivNationalMedicalUniversity />} />
                         <Route path="/zaporizhzhia-state-medical-university" element={<ZaporizhzhiaStateMedicalUniversity />} />
        </Route>      
        
        <Route path="/mbbs-uzbekistan" element={<MbbsUzbekistan />}> 
        <Route path="/fergana-medical-institute" element={<FerganaMedicalInstitute />} />
        </Route> */}
          <Route path="/mbbs-in-usa" element={<MbbsInUSA />} />
          {/* <Route path="mbbs-in-usa">
            <Route
              path="texila-american-university-college"
              element={<TexilaAmericanUniversityCollege />}
            />
          </Route> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
