import { Tabs } from "expo-router";


const _layout = () => {
  return (
      <Tabs screenOptions={{ tabBarActiveTintColor: "#9BA1A6" }}>
      <Tabs.Screen
        name="Page1"
        options={{
          title: 'Page 1',
           // tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Page2"
        options={{
          title: 'Page 2',
           // tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default _layout;