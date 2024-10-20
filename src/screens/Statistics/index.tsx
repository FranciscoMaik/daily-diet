import React from 'react';
import { Text, View } from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import { Container } from './styles';

const basePercentage = 40;

const Statistics: React.FC = () => {
    const { goBack } = useNavigation();
    const {top} = useSafeAreaInsets();

  return (
    <View style={{
        backgroundColor: basePercentage >= 50 ? `#E5F0DB` : `#F4E6E7`,
        flex: 1,
        marginTop: top,
    }}>
        <View
        style={{
            paddingHorizontal: 16,
            paddingVertical: 20,
            alignItems: `center`,
            justifyContent: `center`,
            gap: 8,
            position: `relative`,
            height: 200,
        }}
    >       
        <Feather name="arrow-left" size={28} color={basePercentage >= 50 ? `#639339` : `#BF3B44`} 
                style={{position: `absolute`, top: 24    , left: 24}}
                onPress={goBack}
            />
        <Text 
            style={{
                fontSize: 32,
                fontWeight: `bold`,
            }}
        >
            90,86%</Text>
        <Text>das refeições dentro da dieta</Text>
    </View>

    <View style={{
        backgroundColor: `#FAFAFA`,
        flex: 1,
        alignItems: `center`,
        borderTopEndRadius: 32,
        borderTopStartRadius: 32,
        marginTop: -16,
        paddingHorizontal: 24,
        paddingVertical: 32,
    }}>
        <Text>Estatísticas gerais</Text>
    </View>

    </View>
);
}

export default Statistics;