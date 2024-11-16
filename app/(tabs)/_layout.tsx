import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
const TabLayout = () => {

    // if (!loading && !isLogged) return <Redirect href="/sign-in" />;
    const TabIcon = ({ icon, color, name, focused }: any) => {
        return (
            <View >
                <Image
                    source={icon}
                    resizeMode="contain"
                    tintColor={color}
                />
                <Text
                    style={{ color: color }}
                >
                    {name}
                </Text>
            </View>
        );
    };
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarShowLabel: false,
                }}
            >
                <Tabs.Screen
                    name="dashboard"
                    options={{
                        title: "Dashboard",
                        headerShown: false,
                        tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
                    }}


                />
                <Tabs.Screen
                    name="courses"
                    options={{
                        title: "Courses",
                        headerShown: false,
                        tabBarIcon: ({ color }) => <FontAwesome size={24} name="book" color={color} />,
                    }}
                />

                <Tabs.Screen
                    name="timetable"
                    options={{
                        title: "Time Table",
                        headerShown: false,
                        tabBarIcon: ({ color }) => <FontAwesome size={24} name="calendar" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,

                        tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color} />,

                    }}
                />
            </Tabs>

            <StatusBar backgroundColor="#161622" style="dark" />
        </>
    );
};

//<Loader isLoading={loading} />
export default TabLayout;
