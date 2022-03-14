import XCTest

class NavigationExampleUITests: XCTestCase {
  override func setUpWithError() throws {
    continueAfterFailure = false
  }

  override func tearDownWithError() throws {
  }

  func testExample() throws {
    let app = XCUIApplication()
    app.launch()
    
    print("----- Assert we're on the home screen")
    
    // This assert is fast
    XCTAssertTrue(app.staticTexts["Current screen: Home"].exists)
    
    print("----- Navigate to the nested screen")
    
    // Open the nested navigator
    app.buttons["NestedScreen"].tap()
    
    // Wait a moment for the screen to animate in
    sleep(2)
    
    print("----- Assert we're on the nested screen")
    
    // This assert is slow
    XCTAssertTrue(app.staticTexts["Current screen: NestedScreen"].exists)
    
    print("----- Log the debug description")
    
    // Getting this info is slow too
    print(app.debugDescription)
    
    print("----- Done")
  }
}
