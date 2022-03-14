//
//  NavigationExampleUITests.swift
//  NavigationExampleUITests
//
//  Created by Levi Buzolic on 14/3/2022.
//

import XCTest

class NavigationExampleUITests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.

        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testExample() throws {
        let app = XCUIApplication()
        app.launch()
      
        print(app.debugDescription)
      
        XCTAssertTrue(app.staticTexts["Current screen: NestedScreen"].exists)
    }
}
