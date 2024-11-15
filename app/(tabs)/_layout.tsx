import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";


const TabLayout = () => {

    // if (!loading && !isLogged) return <Redirect href="/sign-in" />;

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 84,
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name="bookmark"
                    options={{
                        title: "Bookmark",
                        headerShown: false,
                    }}
                />

                <Tabs.Screen
                    name="create"
                    options={{
                        title: "Create",
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                    }}
                />
            </Tabs>

            <StatusBar backgroundColor="#161622" style="light" />
        </>
    );
};

//<Loader isLoading={loading} />
export default TabLayout;
