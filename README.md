# ReactNavigationTutorial
Run instructions for iOS: • cd "/Users/k0s02oi/Documents/selfRepos/ReactNavigationTutorial" && npx react-native run-ios - or - • Open ReactNavigationTutorial/ios/ReactNavigationTutorial.xcworkspace in Xcode or run "xed -b ios" • Hit the Run button

Run instructions for Android: • Have an Android emulator running (quickest way to get started), or a device connected. • cd "/Users/k0s02oi/Documents/selfRepos/ReactNavigationTutorial" && npx react-native run-android

<<<<<<< HEAD
  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/k0s02oi/Documents/selfRepos/ReactNavigationTutorial" && npx react-native run-android
    
 # Docs
 
 # NavigationContainer
        this is a component which manages the project navigation tree and contains the navigation state. this component must wrap all navigators structure.
 
 
 # StackNavigator
 
 React Navigation's stack navigator provides a way for your app to transition between screens and manage navigation history.
 React Navigation's stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack.
   createStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator.
    the Navigator should contain the screen elements as its childern to define the configuration for routes.
=======
# Docs

# NavigationContainer
    this is a component which manages the project navigation tree and contains the navigation state. 
    this component must wrap all navigators structure.
>>>>>>> 9503b64275107371f85bd5354ed7d7d71b109309
    
# StackNavigator
React Navigation's stack navigator provides a way for your app to transition between screens and manage navigation history. React Navigation's stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack. createStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator. the Navigator should contain the screen elements as its childern to define the configuration for routes.

we can pass additional props to a screen using the following approaches

   * use React Context and wrap the navigator with a context provider.
   * use a render callback for the screen instead of specifying a component prop. (Note: we will need to ensure that we use React.memo or React.PureComponent for our screen components to avoid performance issues). 

# Navigation between Screens
we will use the Navigation prop to navigate between the screens that is passed down to our screen components.

navigation - this prop is passed in to every screen component in stack navigator.
navigate(screenName) - we call this function on navigation prop with the name of the route that we'd like to move the user to.
push(screenName) - allow us to express the intent to add another route regardless of the existing navigation history.
goBack() - this method will be used to be able to programatically trigger this behavior.
popToTop() - which goes back to the first screen in the stack.

# Pass Data to Routes
pass params to a route by putting them in an object as a second parameter to the navigation.navigate function.

read the params in your screen component using route.params

the navigation.setParams method allow us to update the params of the screen.

we can also pass initial params to the screen using initialParams prop. if we didn't specify any params when navigating to the screen, the initialParams will be used.

# Header config
by using navigation.setOptions method we can update the options configuration for the active screen from the mounted screen component itself.

3 key properties to use customizing the style of the header
    * headerStyle: a style object that will be applied to the View that wraps the header.
    * headerTintColor:  the back button and title both use this property as their color. 
    * headerTitleStyle: if we want to customize the fontFamily, fontWeight and other Text style properties for the title.
    
<<<<<<< HEAD
       * use React Context and wrap the navigator with a context provider.
       * use a render callback for the screen instead of specifying a component prop. (Note: we will need to ensure that we use React.memo or React.PureComponent for our screen components to avoid performance issues). 
  
  # Navigation between Screens
    we will use the Navigation prop to navigate between the screens that is passed down to our screen components.
   
   # Pass Data to Routes
   pass params to a route by putting them in an object as a second parameter to the navigation.navigate function.
   
   read the params in your screen component using route.params
   
   the navigation.setParams method allow us to update the params of the screen.
   
   we can also pass initial params to the screen using initialParams prop. if we didn't specify any params when navigating to the screen, the initialParams will be used.
   
=======
using screenOptions prop on stackNavigator will apply the configuration to all the screens which belongs to that navigator.




>>>>>>> 9503b64275107371f85bd5354ed7d7d71b109309
 
