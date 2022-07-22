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
import YerevanHaybusakUniversity from "./Components/Armenia/YerevanHaybusakUniversity";
import BelarusianStateMedicalUniversity from "./Components/Belarus/BelarusianStateMedicalUniversity";
import VitebskStateMedicalUniversity from "./Components/Belarus/VitebskStateMedicalUniversity";
import ChinaMedicalUniversity from "./Components/China/ChinaMedicalUniversity";
import DalianMedicalUniversity from "./Components/China/DalianMedicalUniversity";
import FujianMedicalUniversity from "./Components/China/FujianMedicalUniversity";
import KunmingMedicalUniversity from "./Components/China/KunmingMedicalUniversity";
import NanjingMedicalUniversity from "./Components/China/NanjingMedicalUniversity";
import AinShyamsUniversity from "./Components/Egypt/AinShyamsUniversity";
import CairoUniversity from "./Components/Egypt/CairoUniversity";

import InternationalMedicalSchool from "./Components/Kazaksthan/InternationalMedicalSchool";
import JscNationalMedicalUniversity from "./Components/Kazaksthan/JscNationalMedicalUniversity";
import AlFarabiNationalMedicalUniversity from "./Components/Kazaksthan/AlFarabiNationalMedicalUniversity";
import OshStateMedicalUniversity from "./Components/Kyrgyzstan/OshStateMedicalUniversity";
import SalymbekovUniversity from "./Components/Kyrgyzstan/SalymbekovUniversity";
import AmaUniversity from "./Components/Philippines/AmaUniversity";
import Medicaluniversityofgdansk from "./Components/Poland/MedicalUniversityOfGdansk";
import TexilaAmericanUniversityCollege from "./Components/USA/TexilaAmericanUniversityCollege";
import MbbsInKyrgystan from "./Components/Mbbs-In-Abroad/MbbsInKyrgystan";
import MbbsInPhillipines from "./Components/Mbbs-In-Abroad/MbbsInPhillipines";
import MbbsInPoland from "./Components/Mbbs-In-Abroad/MbbsInPoland";
import MbbsInRussia from "./Components/Mbbs-In-Abroad/MbbsInRussia";
import MbbsInUkraine from "./Components/Mbbs-In-Abroad/MbbsInUkraine";
import MbbsInUSA from "./Components/Mbbs-In-Abroad/MbbsInUSA";
import MbbsInArmenia from "./Components/Mbbs-In-Abroad/MbbsInArmenia";
import YerevanStateMedicalUniversity from "./Components/Armenia/YerevanStateMedicalUniversity";
import MbbsInEgypt from "./Components/Mbbs-In-Abroad/MbbsInEgypt";
import GrodnoStateMedicalUniversity from "./Components/Belarus/GrodnoStateMedicalUniversity";
import MedicalUniversityOfWarsaw from "./Components/Poland/MedicalUniversityOfWarsaw";
import JilinMedicalUniversity from "./Components/China/JilinMedicalUniversity";
import TbilisiStateMedicalUniversity from "./Components/Gerogia/TbilisiStateMedicalUniversity";
import AkakiTsereteliState from "./Components/Gerogia/AkakiTsereteliState";
import BatumiShotaRustaveliStateMedicalUniversity from "./Components/Gerogia/BatumiShotaRustaveliStateMedicalUniversity";
import CaucasusInternationalMedicalUniversity from "./Components/Gerogia/CaucasusInternationalMedicalUniversity";
import DavidTvildianiMedicalUniversity from "./Components/Gerogia/DavidTvildianiMedicalUniversity";
import EuropeanUniversity from "./Components/Gerogia/EuropeanUniversity";
import GeorgianAmericanUniversity from "./Components/Gerogia/GeorgianAmericanUniversity";
import IvaneJavakhishvili from "./Components/Gerogia/IvaneJavakhishvili";
import PetreShotadzeTbilisiMedicalAcademy from "./Components/Gerogia/PetreShotadzeTbilisiMedicalAcademy";
import UniversityOfGeorgiaSchool from "./Components/Gerogia/UniversityOfGeorgiaSchool";
import DavaoMedicalCollege from "./Components/Philippines/DavaoMedicalCollege";
import EmilioAguinaldoCollege from "./Components/Philippines/EmilioAguinaldoCollege";
import OurLadyOfFatimaUniversity from "./Components/Philippines/OurLadyOfFatimaUniversity";
import UniversityOfPerpetualHelp from "./Components/Philippines/UniversityOfPerpetualHelp";
import BashkirStateMedicalUniversity from "./Components/Russia/BashkirStateMedicalUniversity";
import CrimeaStateMedicalUniversity from "./Components/Russia/CrimeaStateMedicalUniversity";
import IngushStateMedicalAcademy from "./Components/Russia/IngushStateMedicalAcademy";
import KabardinoBalkarianStateMedicalUniversity from "./Components/Russia/KabardinoBalkarianStateMedicalUniversity";
import KazanFederalUniversity from "./Components/Russia/KazanFederalUniversity";
import KazanStateMedicalUniversity from "./Components/Russia/KazanStateMedicalUniversity";
import KirovStateMedicalUniversity from "./Components/Russia/KirovStateMedicalUniversity";
import KruskStateMedicalUniversity from "./Components/Russia/KruskStateMedicalUniversity";
import KemerovoStateMedicalUniversity from "./Components/Russia/KemerovoStateMedicalUniversity";
import LobachevskyStateMedicalUniversity from "./Components/Russia/LobachevskyStateMedicalUniversity";
import VolgograStateMedicalUniversity from "./Components/Russia/VolgograStateMedicalUniversity";
import NorthCaucasianStateHumanitarian from "./Components/Russia/NorthCaucasianStateHumanitarian ";
import NorthOssetianStateMedicalUniversity from "./Components/Russia/NorthOssetianStateMedicalUniversity";
import FerganaMedicalInstitute from "./Components/Uzbekistan/FerganaMedicalInstitute";
import MbbsUzbekistan from "./Components/Mbbs-In-Abroad/MbbsUzbekistan";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import BlackSeaNationalMedicalUniversity from "./Components/Ukraine/BlackSeaNationalMedicalUniversity";

function App() {
  return (
    <>
      <Router>
        <Menubar />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/blog" element={<Blog />}></Route> */}
          <Route path="/contact" element={<Contact />}></Route>

          {/* Armenia Routes */}
          {/* <Route
            path="/top-medical-university"
            element={<TopMedicalUniversity />}
          ></Route> */}
          <Route path="/mbbs-in-armenia" element={<MbbsInArmenia />}></Route>
          <Route
            path="/mbbs-in-armenia/yerevan-haybusak-university-faculty-of-medicine"
            element={<YerevanHaybusakUniversity />}
          />
          <Route
            path="/mbbs-in-armenia/yerevan-state-medical-university"
            element={<YerevanStateMedicalUniversity />}
          />

          {/* Armenia Routes */}

          {/* <Route
            path="/mbbs-in-bangaladesh"
            element={<MbbsInBangladesh />}
          ></Route> */}

          {/* Belarus Routes */}
          <Route path="/mbbs-in-belarus" element={<MbbsInBelarus />}></Route>
          <Route
            path="/mbbs-in-belarus/belarusian-state-medical-university"
            element={<BelarusianStateMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-belarus/grodno-state-medical-university"
            element={<GrodnoStateMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-belarus/vitebsk-state-medical-university"
            element={<VitebskStateMedicalUniversity />}
          />
          {/* Belarus Routes */}

          {/* China Routes */}
          <Route path="/mbbs-in-china" element={<MbbsInChina />}></Route>
          <Route
            path="/mbbs-in-china/china-medical-university"
            element={<ChinaMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-china/dalian-medical-university"
            element={<DalianMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-china/fujian-medical-university"
            element={<FujianMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-china/jilin-medical-university"
            element={<JilinMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-china/kunming-medical-university"
            element={<KunmingMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-china/nanjing-medical-university"
            element={<NanjingMedicalUniversity />}
          />
          {/* China Routes */}

          {/* Egypt Routes */}
          <Route path="/mbbs-in-egypt" element={<MbbsInEgypt />}></Route>
          <Route
            path="/mbbs-in-egypt/ain-shyams-university"
            element={<AinShyamsUniversity />}
          />
          <Route
            path="/mbbs-in-egypt/cairo-university"
            element={<CairoUniversity />}
          />
          {/* Egypt Routes */}

          {/* Georgia Routes */}
          <Route path="/mbbs-in-georgia" element={<MbbsInGeorgia />}></Route>
          <Route
            path="/mbbs-in-georgia/akaki-tsereteli-state-medical-university"
            element={<AkakiTsereteliState />}
          />
          <Route
            path="/mbbs-in-georgia/batumi-shota-rustaveli-state-medical-university"
            element={<BatumiShotaRustaveliStateMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-georgia/caucasus-international-medical-university"
            element={<CaucasusInternationalMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-georgia/david-vildiani-medical-university"
            element={<DavidTvildianiMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-georgia/european-university"
            element={<EuropeanUniversity />}
          />
          <Route
            path="/mbbs-in-georgia/georgian-american-university"
            element={<GeorgianAmericanUniversity />}
          />
          <Route
            path="/mbbs-in-georgia/ivane-javakhishvili"
            element={<IvaneJavakhishvili />}
          />
          <Route
            path="/mbbs-in-georgia/petre-shotadze-tbilisi-medical-academy"
            element={<PetreShotadzeTbilisiMedicalAcademy />}
          />
          <Route
            path="/mbbs-in-georgia/tbilisi-state-medical-university"
            element={<TbilisiStateMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-georgia/university-of-georgia-school"
            element={<UniversityOfGeorgiaSchool />}
          />
          {/* Georgia Routes */}

          {/* Kazakhstan Routes*/}
          <Route
            path="/mbbs-in-kazakhstan"
            element={<MbbsInKazakhstan />}
          ></Route>
          <Route
            path="/mbbs-in-kazakhstan/al-farabi-national-medical-university"
            element={<AlFarabiNationalMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-kazakhstan/international-medical-school"
            element={<InternationalMedicalSchool />}
          />
          <Route
            path="/mbbs-in-kazakhstan/jsc-national-medical-university"
            element={<JscNationalMedicalUniversity />}
          />
          {/* Kazakhstan Routes*/}

          {/* Kyrgyzstan Routes */}
          <Route
            path="/mbbs-in-kyrgyzstan"
            element={<MbbsInKyrgystan />}
          ></Route>
          <Route
            path="/mbbs-in-kyrgyzstan/osh-state-medical-university"
            element={<OshStateMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-kyrgyzstan/salymbekov-university"
            element={<SalymbekovUniversity />}
          />
          {/* Kyrgyzstan Routes */}

          {/* Philippines Routes*/}
          <Route
            path="/mbbs-in-philippines"
            element={<MbbsInPhillipines />}
          ></Route>
          <Route
            path="/mbbs-in-philippines/ama-university"
            element={<AmaUniversity />}
          />
          <Route
            path="/mbbs-in-philippines/davao-medical-college"
            element={<DavaoMedicalCollege />}
          />
          <Route
            path="/mbbs-in-philippines/emilio-aguinaldo-college"
            element={<EmilioAguinaldoCollege />}
          />
          <Route
            path="/mbbs-in-philippines/our-lady-of-fatima-university"
            element={<OurLadyOfFatimaUniversity />}
          />
          <Route
            path="/mbbs-in-philippines/university-of-perpetual-help"
            element={<UniversityOfPerpetualHelp />}
          />
          {/* Philippines Routes*/}

          {/* Poland Routes*/}
          <Route path="/mbbs-in-poland" element={<MbbsInPoland />}></Route>
          <Route
            path="/mbbs-in-poland/medical-university-of-gdansk"
            element={<Medicaluniversityofgdansk />}
          />
          <Route
            path="/mbbs-in-poland/medical-university-of-warsaw"
            element={<MedicalUniversityOfWarsaw />}
          />
          {/* Poland Routes*/}

          {/* Russia Routes */}
          <Route path="/mbbs-in-russia" element={<MbbsInRussia />}></Route>
          <Route
            path="/mbbs-in-russia/bashkir-state-medical-university"
            element={<BashkirStateMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-russia/crimea-state-medical-university"
            element={<CrimeaStateMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-russia/ingush-state-medical-academy"
            element={<IngushStateMedicalAcademy />}
          />
          <Route
            path="/mbbs-in-russia/kabardino-balkariand-state-medical-university"
            element={<KabardinoBalkarianStateMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-russia/kazan-federal-university"
            element={<KazanFederalUniversity />}
          />
          <Route
            path="/mbbs-in-russia/kazan-state-medical-university"
            element={<KazanStateMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-russia/kirov-state-medical-university"
            element={<KirovStateMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-russia/krusk-state-medical-university"
            element={<KruskStateMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-russia/kemerovo-state-medical-university"
            element={<KemerovoStateMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-russia/lobachevsky-state-Medical-University"
            element={<LobachevskyStateMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-russia/volgogra-state-medical-university"
            element={<VolgograStateMedicalUniversity />}
          />
          <Route
            path="/mbbs-in-russia/north-caucasian-state-humanitarian"
            element={<NorthCaucasianStateHumanitarian />}
          />
          <Route
            path="/mbbs-in-russia/north-ossetian-state-medical-university"
            element={<NorthOssetianStateMedicalUniversity />}
          />
          {/* Russia Routes */}

          <Route path="/mbbs-in-ukraine" element={<MbbsInUkraine />}></Route>
            <Route path="/mbbs-in-ukraine/black-sea-national-medical-university" element={<BlackSeaNationalMedicalUniversity />} />
         {/* <Route path="/ternopil-state-medical-university" element={<TernopilStateMedicalUniversity />} />
          <Route path="/odessa-national
" element={<OdessaNational
 />} />
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
                         <Route path="/zaporizhzhia-state-medical-university" element={<ZaporizhzhiaStateMedicalUniversity />} /> */}
          

          {/* Uzbekistan Routes */}
          <Route path="/mbbs-in-uzbekistan" element={<MbbsUzbekistan />} />
          <Route
              path="/mbbs-in-ubzekistan/fergana-medical-institute"
              element={<FerganaMedicalInstitute />}
            />
          {/* Uzbekistan Routes */}
          <Route path="/mbbs-in-usa" element={<MbbsInUSA />} />
          <Route
              path="/mbbs-in-usa/texila-american-university-college"
              element={<TexilaAmericanUniversityCollege />}
            />

            <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
