import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe('contains test cases for Contact us page',()=>{
    test("should load contact us component",()=>{
        render(<Contact/>);
        //whatever yoi render over here it will get rendered to JSDOM
        //screen is an object that comes form RTL after placing . we can find what got rendered
       const heading=screen.getByRole("heading");
       //these roles are defined by jest
       //can also do getByText 
    
       //assertion
       expect(heading).toBeInTheDocument();
       //toBeInTheDocument comes from @testing-library/jest-dom
       //checking whether this heading was inside the screen/Document or not
    })
    
    //lets write a test case for butoon
    test("should load button inside our contact component",()=>{
        render(<Contact/>);
        //whatever yoi render over here it will get rendered to JSDOM
        //screen is an object that comes form RTL after placing . we can find what got rendered
       const button=screen.getByText("Submit");
    
       //assertion
       expect(button).toBeInTheDocument();
       //toBeInTheDocument comes from @testing-library/jest-dom
       //checking whether this heading was inside the screen/Document or not
    })
    
    test("should load input Name inside our contact component",()=>{
        render(<Contact/>);
        //whatever yoi render over here it will get rendered to JSDOM
        //screen is an object that comes form RTL after placing . we can find what got rendered
      
      //querying
        const input=screen.getByPlaceholderText('Name')
    
       //assertion
       expect(input).toBeInTheDocument();
       //toBeInTheDocument comes from @testing-library/jest-dom
       //checking whether this heading was inside the screen/Document or not
    })
    
    test("it shpuld load two input boxes", ()=>{
     render(<Contact/>)
    
     const inputboxes = screen.getAllByRole('textbox')
    
     expect(inputboxes.length).toBe(2);
    })}
)