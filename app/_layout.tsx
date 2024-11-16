import { Stack } from "expo-router"

export default function RootLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen name='dashboard' options={{ headerShown: false, }} />
                <Stack.Screen name='courses' options={{ headerShown: false, }} />
                <Stack.Screen name='timetable' options={{ headerShown: false, }} />
                <Stack.Screen name='profile' options={{ headerShown: false, }} />
            </Stack>
        </>
    )
}
