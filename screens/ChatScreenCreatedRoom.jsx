import React, { useLayoutEffect, useState } from 'react';
import { keyboard, View, Text, TextInput, ScrollView, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, StatusBar, Platform, KeyboardAvoidingView } from 'react-native';
import {Avatar} from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';
import styles from './styles';
import firebase from 'firebase';
import { db, auth } from '../firebase';
function ChatScreenCreatedRoom({route}) {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const navigation = useNavigation();

    const sendMessage = () => {
        keyboard.dismiss();
        db.collection('chats').doc(route.params.id).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            displayName: auth.currentUser, displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL
        });
        setInput('')
    };
        // useLayoutEffect(() => {
        //     const unsubscribe = db
        //     .collection('chats')
        //     .doc(route.params.id)
        //     .collection['messages']
        //     .orderBy('timestamp', 'desc')
        //     .onSnapshot((snapshot) => setMessages(
        //         snapshot.docs.map(doc => ({
        //             id: doc.id,
        //             data: doc.data(),
        //         }))
        //     ));
        //     return unsubscribe;
        // }, [route])
    // const onClick = () => {
    //     navigation.navigate('chatRoom', {
    //     id: chatRoom.id,
    //     name: user.name,
    //     })
    // }
    useLayoutEffect(() =>{
        navigation.setOptions({
            title: "React",
            headerTitleVisible: false,
            headerTitleColor: 'white',
            headerLeft: () => (
                <TouchableOpacity>
                    <AntDesign style={{marginLeft: '10px'}} onPress={navigation.goBack}  name="arrowleft" size={20} color="white" />
                </TouchableOpacity>
            ),
            headerTitleAlign: 'left',
            headerTitle: () => (
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Avatar rounded source={{uri: "https://scontent-cpt1-1.xx.fbcdn.net/v/t1.6435-9/133186417_3567703656684311_1769243332738256683_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=730e14&_nc_eui2=AeGrhS4Ag09OlbNUvrKkYNDe91Gq_BJk9033Uar8EmT3TZ6SsCgFiGfhZuulvZvHn9muB3zl0UarRcciyDwQhf6s&_nc_ohc=wPO9HLRQIJUAX_Xp-vz&_nc_ht=scontent-cpt1-1.xx&oh=553dbdedcffe9ae983f76651292a07ca&oe=6137D4C3"}}/>
                    {/* <Text style={{color: 'white', marginLeft: 10, fontWeight: "700"}} >{route.params.chatName}</Text> */}
                    <Text style={{color: 'white', marginLeft: 10, fontWeight: "700"}} >Niello</Text>
                    <Text>React Chat Rooms</Text>
                </View>
        )
        })
    })

    return (
        <SafeAreaView style={{flex: 1, backgrounColor: "#49274b"}}>
            <StatusBar style='light' />
             {/* <Text>{route.params.chatName}</Text>  */}
             <Text>Niello chat room</Text>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container} keyboardVerticalOffset={90}
            >
                <TouchableWithoutFeedback>
                {/* <TouchableWithoutFeedback onPress={keyboard.dismiss}> */}
                <>
                    <ScrollView contentContainerStyle={{paddingTop: 15}}>
                            {messages.map(({ id, data }) => 
                                data.email === auth.currentUser.email ? (
                                    <View key={id} style={styles.receiver}>
                                        <Avatar rounded size={35} position="absolute" right={-5} bottom={-25}
                                        containerStyle={{position: 'absolute', bottom: -25, right: -5}}
                                        source={{uri: "https://scontent-cpt1-1.xx.fbcdn.net/v/t1.6435-9/133186417_3567703656684311_1769243332738256683_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=730e14&_nc_eui2=AeGrhS4Ag09OlbNUvrKkYNDe91Gq_BJk9033Uar8EmT3TZ6SsCgFiGfhZuulvZvHn9muB3zl0UarRcciyDwQhf6s&_nc_ohc=wPO9HLRQIJUAX_Xp-vz&_nc_ht=scontent-cpt1-1.xx&oh=553dbdedcffe9ae983f76651292a07ca&oe=6137D4C3"}}/>
                                        <Text style={styles.receiverText}>
                                        <Text style={styles.receiverName}>{data.displayName}</Text>
                                        {data.message}
                                        </Text>
                                        </View>
                                        ) : (
                                            
                                        <View style={styles.sender}>
                                            <Avatar rounded size={30} source={{uri: "https://scontent-cpt1-1.xx.fbcdn.net/v/t1.6435-9/133186417_3567703656684311_1769243332738256683_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=730e14&_nc_eui2=AeGrhS4Ag09OlbNUvrKkYNDe91Gq_BJk9033Uar8EmT3TZ6SsCgFiGfhZuulvZvHn9muB3zl0UarRcciyDwQhf6s&_nc_ohc=wPO9HLRQIJUAX_Xp-vz&_nc_ht=scontent-cpt1-1.xx&oh=553dbdedcffe9ae983f76651292a07ca&oe=6137D4C3"}}/>
                                            <Text style={styles.senderText}>
                                            <Text style={styles.senderName}>{data.displayName}</Text>
                                            {data.message}
                                        </Text>
                                    </View>
                                )
                            )} 
                    </ScrollView>

                    {/* <ScrollView contentContainerStyle={{paddingTop: 15}}>
                        <View style={styles.receiver}>
                            <Avatar rounded size={35} position="absolute" right={-5} bottom={-25}
                            containerStyle={{position: 'absolute', bottom: -25, right: -5}}
                            source={{uri: "https://scontent-cpt1-1.xx.fbcdn.net/v/t1.6435-9/133186417_3567703656684311_1769243332738256683_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=730e14&_nc_eui2=AeGrhS4Ag09OlbNUvrKkYNDe91Gq_BJk9033Uar8EmT3TZ6SsCgFiGfhZuulvZvHn9muB3zl0UarRcciyDwQhf6s&_nc_ohc=wPO9HLRQIJUAX_Xp-vz&_nc_ht=scontent-cpt1-1.xx&oh=553dbdedcffe9ae983f76651292a07ca&oe=6137D4C3"}}/>
                            <Text style={styles.receiverText}>
                                I am the receiver and I aint came to play here dude
                            </Text>
                            <Text style={styles.receiverName}>@Prince</Text>
                        </View>

                        <View style={styles.sender}>
                        <Avatar rounded size={30} source={{uri: "https://scontent-cpt1-1.xx.fbcdn.net/v/t1.6435-9/133186417_3567703656684311_1769243332738256683_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=730e14&_nc_eui2=AeGrhS4Ag09OlbNUvrKkYNDe91Gq_BJk9033Uar8EmT3TZ6SsCgFiGfhZuulvZvHn9muB3zl0UarRcciyDwQhf6s&_nc_ohc=wPO9HLRQIJUAX_Xp-vz&_nc_ht=scontent-cpt1-1.xx&oh=553dbdedcffe9ae983f76651292a07ca&oe=6137D4C3"}}/>
                            <Text style={styles.senderText}>
                                I am the sender
                            </Text>
                            <Text style={styles.senderName}>@RussOfficell</Text>
                        </View>     
                    </ScrollView> */}
                    <View style={styles.footer}>
                        {/* footer input bar */}
                        <TextInput value={input} onChangeText={(text) => setInput(text)} style={styles.textInput}
    
                            // onSubmitEditing={sendMessage}
                            placeholder="React?" />
                        <TouchableOpacity activeOpacity={0.5}>
                            <Ionicons name="send" size={16} color="#49274b" />
                        </TouchableOpacity>
                    </View>
                </>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreenCreatedRoom

