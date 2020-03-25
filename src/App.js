import React from "react";
import Axios from "axios";
import "./style.css"

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.getCountryData=this.getCountryData.bind(this);
    }

    state={
        confirmed:0,
        deaths:0,
        recovered: 0,
        lastupdated: 0,
        countries:[]
    }
    componentDidMount(){
        this.getData();
    }
    async getData(){
        const resApi=await Axios.get("https://covid19.mathdro.id/api");
        const resCountries=await Axios.get("https://covid19.mathdro.id/api/countries");
     
        const countries=Object.keys(resCountries.data.countries);
        this.setState({
            confirmed:resApi.data.confirmed.value,
            deaths:resApi.data.deaths.value,
            recovered: resApi.data.recovered.value,
            lastupdated: resApi.data.lastUpdate,
            countries
        })
    }

    async getCountryData(e){
        if(e.target.value==="Worldwide"){
          return this.getData();
        }else{
        try{
        const res=await Axios.get("https://covid19.mathdro.id/api/countries/"+e.target.value);
        this.setState({
            confirmed:res.data.confirmed.value,
            deaths:res.data.deaths.value,
            recovered: res.data.recovered.value,
            lastupdated: res.data.lastUpdate,
           
        })
        console.log("sdfghjk");
    }catch(err){
       
        if(err.response.status === 404){
            console.log("rrrrrrrrrrrr");
            this.setState({
                confirmed:"No Data Available",
                deaths:"No Data Available",
                recovered:"No Data Available",
               
            })
            
        }
       
    }
}
    }




    renderCountryOptions(){
        return this.state.countries.map((name,i)=>{
        return(<option key={i}>{i}</option>)
        });
    }
    render(){

        return(
        <div className="container"> 
            <h1>Corona Updates</h1>
            <select className="dropdown" onChange={this.getCountryData}>
            <option>Worldwide</option>
                <option>Afghanistan</option>
                <option>Albania</option>
                <option>Algeria</option>
                <option>Andorra</option>
                <option>Angola</option>
                <option>Antigua and Barbuda</option>
                <option>Armenia</option>
                <option>Australia</option>
                <option>Austria</option>
                <option>Azerbaijan</option>
                <option>Bahamas</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
                <option>Belarus</option>
                <option>Belgium</option>
                <option>Belize</option>
                <option>Benin</option>
                <option>Bhutan</option>
                <option>Bolivia</option>
                <option>Bosnia and Herzegovina</option>
                <option>Brazil</option>
                <option>Brunei</option>
                <option>Bulgaria</option>
                <option>Burkina Faso</option>
                <option>Cabo Verde</option>
                <option>Cambodia</option>
                <option>Cameroon</option>
                <option>Canada</option>
                <option>Central African Republic</option>
                <option>Chad</option>
                <option>Chile</option>
                <option>China</option>
                <option>Colombia</option>
                <option>Brazzaville</option>
                <option>Kinshasa</option>
                <option>Costa Rica</option>
                <option>Costa Rica</option>
                <option>Cote d'Ivoire</option>
                <option>Croatia</option>
                <option>Croatia</option>
                <option>Cuba</option>
                <option>Cyprus</option>
                <option>Czechia</option>
                <option>Denmark</option>
                <option>Diamond Princess</option>
                <option>Djibouti</option>
                <option>Dominica</option>
                <option>Dominican Republic</option>
                <option>Ecuador</option>
                <option>Egypt</option>
                <option>El Salvador</option>
                <option>Equatorial Guinea</option>
                <option>Eritrea</option>
                <option>Estonia</option>
                <option>Eswatini</option>
                <option>Ethiopia</option>
                <option>Fiji</option>
                <option>Finland</option>
                <option>France</option>
                <option>Gabon</option>
                <option>Gambia</option>
                <option>Georgia</option>
                <option>Germany</option>
                <option>Ghana</option>
                <option>Greece</option>
                <option>Grenada</option>
                <option>Guatemala</option>
                <option>Guinea</option>
                <option>Guyana</option>
                <option>Haiti</option>
                <option>Holy See</option>
                <option>Honduras</option>
                <option>Hungary</option>
                <option>Iceland</option>
                <option>India</option>
                <option>Indonesia</option>
                <option>Iran</option>
                <option>Iraq</option>
                <option>Ireland</option>
                <option>Israel</option>
                <option>Italy</option>
                <option>Jamaica</option>
                <option>Japan</option>
                <option>Jordan</option>
                <option>Kazakhstan</option>
                <option>Kenya</option>
                <option>Korea, South</option>
                <option>Kuwait</option>
                <option>Kyrgyzstan</option>
                <option>Laos</option>
                <option>Latvia</option>
                <option>Lebanon</option>
                <option>Liberia</option>
                <option>Libya</option>
                <option>Liechtenstein</option>
                <option>Lithuania</option>
                <option>Luxembourg</option>
                <option>Madagascar</option>
                <option>Malaysia</option>
                <option>Maldives</option>
                <option>Malta</option>
                <option>Mauritania</option>
                <option>Mauritius</option>
                <option>Mexico</option>
                <option>Moldova</option>
                <option>Monaco</option>
                <option>Mongolia</option>
                <option>Montenegro</option>
                <option>Morocco</option>
                <option>Mozambique</option>
                <option>Namibia</option>
                <option>Nepal</option>
                <option>Netherlands</option>
                <option>New Zealand</option>
                <option>Nicaragua</option>
                <option>Niger</option>
                <option>Nigeria</option>
                <option>North Macedonia</option>
                <option>Norway</option>
                <option>Oman</option>
                <option>Pakistan</option>
                <option>Panama</option>
                <option>Papua New Guinea</option>
                <option>Paraguay</option>
                <option>Peru</option>
                <option>Philippines</option>
                <option>Poland</option>
                <option>Portugal</option>
                <option>Qatar</option>
                <option>Romania</option>
                <option>Russia</option>
                <option>Rwanda</option>
                <option>Saint Lucia</option>
                <option>Saint Vincent and the Grenadines</option>
                <option>San Marino</option>
                <option>Saudi Arabia</option>
                <option>Senegal</option>
                <option>Serbia</option>
                <option>Seychelles</option>
                <option>Singapore</option>
                <option>Slovakia</option>
                <option>Slovenia</option>
                <option>Somalia</option>
                <option>South Africa</option>
                <option>Spain</option>
                <option>Sri Lanka</option>
                <option>Sudan</option>
                <option>Suriname</option>
                <option>Sweden</option>
                <option>Switzerland</option>
                <option>Syria</option>
                <option>Taiwan</option>
                <option>Tanzania</option>
                <option>Thailand</option>
                <option>Timor-Leste</option>
                <option>Togo</option>
                <option>Trinidad and Tobago</option>
                <option>Tunisia</option>
                <option>Turkey</option>
                <option>US</option>
                <option>Uganda</option>
                <option>Ukraine</option>
                <option>United Arab Emirates</option>
                <option>United Kingdom</option>
                <option>Uruguay</option>
                <option>Uzbekistan</option>
                <option>Venezuela</option>
                <option>Vietnam</option>
                <option>Zambia</option>
                <option>Zimbabwe</option>




                

                


















            </select>

            <div className="flex">
                <div className="box confirmed">
                    <h3>Confirmed Cases</h3>
                    <h4>{this.state.confirmed}</h4>
                </div>
                <div className="box deaths">
                    <h3>Deaths</h3>
                    <h4>{this.state.deaths}</h4>
                </div>
                <div className="box recovered">
                    <h3>Recovered</h3>
                        <h4>{this.state.recovered}</h4>
                </div>
            </div>
                <p >Last update on {this.state.lastupdated}</p>
        </div>
        );
    }
}