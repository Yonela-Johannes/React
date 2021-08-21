import  React, { useState }from "react";
import { View, ScrollView, Text, TouchableOpacity} from "react-native";
import ChamberHeader from "../components/ChambersListItem/ChamberHeader";
import { useNavigation } from '@react-navigation/native';

export default function Kasi({ id , chatName}){

    const navigation = useNavigation();

    const [kasi, setKasi] = useState([
    {name: 'Albertinia',
     key: '1'},
    {name: 'Ashton',
     key: '2'},
    {name: 'Atlantis',
     key: '3'},
    {name: 'BarryDale',
     key: '5'},
    {name: "Betty's Bay",
     key: '6'},
    {name: 'Belville',
     key: '7'},
    {name: 'Bluedowns',
     key: '8'},
    {name: 'Bonnievale',
     key: '9'},
    {name: 'Brackenfell',
     key: '10'},
    {name: 'Caledon',
     key: '11'},
    {name: 'Calitzdorp',
     key: '12'},
    {name: 'Ceres',
     key: '13'},
    {name: 'Citrusdal',
     key: '14'},
    {name: 'De Doorns',
     key: '15'},
    {name: 'Durbanville',
     key: '16'},
    {name: 'Eerste River',
     key: '17'},
    {name: 'Elsies River',
     key: '18'},
    {name: 'Fishoek',
     key: '19'},
    {name: 'George',
     key: '20'},
    {name: "Gordon's Bay",
     key: '21'},
    {name: 'Grabouw',
     key: '22'},
    {name: 'Greyton',
     key: '23'},
    {name: 'Gugulethu',
     key: '24'},
    {name: 'Hermanus',
     key: '25'},
    {name: 'Hout Bay',
     key: '26'},
    {name: 'Kayamandi',
     key: '27'},
    {name: 'Khayelitsha',
     key: '28'},
    {name: 'Klapmuts',
     key: '29'},
    {name: 'Knysna',
     key: '30'},
    {name: 'Kuilsrivier',
     key: '31'},
    {name: 'Kraaifontein',
     key: '32'},
    {name: 'Langa',
     key: '33'},
    {name: 'Maccassar',
     key: '34'},
    {name: 'Malmesbury',
     key: '35'},
    {name: 'Mc Gregor',
     key: '36'},
    {name: 'Mfuleni',
     key: '36'},
    {name: "Mitchel's Plain",
     key: '38'},
    {name: 'Morreesburg',
     key: '39'},
    {name: 'Mossel Bay',
     key: '40'},
    {name: 'Nyanga',
     key: '41'},
    {name: 'Observatory',
     key: '42'},
    {name: 'Op-die-Berg',
     key: '43'},
    {name: 'Paarl',
     key: '44'},
    {name: 'Parrow',
     key: '45'},
    {name: 'Pitetberg',
     key: '46'},
    {name: 'Porteville',
     key: '47'},
    {name: 'Pniel',
     key: '48'},
    {name: 'Prince Alfred Hamlet',
     key: '49'},
    {name: 'Rawsonville',
     key: '50'},
    {name: 'Riebeek-Kasteel',
     key: '51'},
    {name: 'Riebeek-Wes',
     key: '52'},
    {name: 'Robertson',
     key: '53'},
    {name: 'Rozendal',
     key: '54'},
    {name: 'Saldanha',
     key: '55'},
    {name: 'Saron',
     key: '56'},
    {name: "Simon's Town",
     key: '57'},
    {name: 'Somerset-West',
     key: '58'},
    {name: 'Strand',
     key: '59'},
    {name: 'Strandfontein',
     key: '60'},
    {name: 'St Helena Bay',
     key: '61'},
    {name: 'Villiersdorp',
     key: '62'},
    {name: 'Vredenburg',
     key: '63'},
    {name: 'Vredendal',
     key: '64'},
    {name: 'Wellington',
     key: '65'},
    {name: 'Wolseley',
     key: '66'},
    {name: 'Worcester',
     key: '67'},
    ]);

    
    const enterChat = (id, chatRoom) => {
        navigation.navigate('createdChatRoom', {
          id: id,
          chatName: chatName,
        })
      }
    console.log(kasi[0].name)

    return (
      <View style={{width: "60%"}}>
          <ChamberHeader />         
          <ScrollView style={{overflow: 'hidden'}}>
                {kasi.map((item) => {
                return (
                    <View>
                        <TouchableOpacity activeOpacity={.7}  key={item.key} onPress={() => enterChat(id, chatName)}>
                            <Text style={{
                                color: '#49274b',
                                fontWeight: "bold",
                                fontSize: '.9em',
                                padding: 10,
                                marginLeft: 20,
                                borderBottomWidth: ".2px",
                                borderColor: "#e8e3e9",
                                backgroundColor: "#eed3f3",
                                width: '40%',
                                textAlign: 'start',
                                justifyContent: 'start',
                                cursor: 'pointer'
                            }}>
                                {item.name} 
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
                })}
          </ScrollView>
        </View> 
    );
}

