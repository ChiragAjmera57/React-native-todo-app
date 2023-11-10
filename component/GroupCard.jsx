import React from 'react'
import { Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { pic1, pic2, pic3, pic4, pic5 } from "../assets/svgs";
import * as Animatable from 'react-native-animatable';
import { useRef } from 'react';
import { useEffect } from 'react';

export const GroupCard = ({title,timing}) => {

  return (
    <View style={{height:100,width:190,borderRadius:10,padding:18,backgroundColor:'white',marginRight:15}}>
      

            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14}}>{title}</Text>
            <Text style={{color:'rgba(0, 0, 0, 0.90)',fontSize:11,marginBottom:7}}>{timing}</Text>
            <View
              style={{display: "flex",flexDirection: "row",position: "relative",
              }}
            >
              <SvgXml
                width={35}
                style={{ position: "absolute", top: 0, left: 0 }}
                xml={pic1}
              />
              <SvgXml
                width={35}
                style={{ position: "absolute", top: 0, left: 15 }}
                xml={pic2}
              />
              <SvgXml
                width={35}
                style={{ position: "absolute", top: 0, left: 30 }}
                xml={pic3}
              />
              <View style={{ position: "absolute", top: 0, left: 30 }}>
                <SvgXml
                  width={35}
                  style={{ position: "absolute", top: 0, left: 15 }}
                  xml={pic4}
                />
                <SvgXml
                  width={35}
                  style={{ position: "absolute", top: 7, left: 15 }}
                  xml={pic5}
                />
              </View>
            </View>
          </View>
  )
}
