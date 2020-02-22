# ReactNavigationTutorial

Run instructions for iOS:
    • cd "/Users/k0s02oi/Documents/selfRepos/ReactNavigationTutorial" && npx react-native run-ios
    - or -
    • Open ReactNavigationTutorial/ios/ReactNavigationTutorial.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button

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
    
    we can pass additional props to a screen using the following approaches
    
       * use React Context and wrap the navigator with a context provider.
       * use a render callback for the screen instead of specifying a component prop. (Note: we will need to ensure that we use React.memo or React.PureComponent for our screen components to avoid performance issues). 
  
  # Navigation between Screens
    we will use the Navigation prop to navigate between the screens that is passed down to our screen components.
   
 
