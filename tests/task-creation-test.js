import { Selector } from 'testcafe';

fixture('Task Creation in Employee Section')
    .page('https://easecommerce.in/app/login');  

test('Create a New Task and Verify Task Creation', async t => {
    
    await t
        .typeText('input[name="username"]', 'demouser@easecommerce.in')  
        .typeText('input[name="password"]', 'cE7iQPP^')  
        .click('button[id=":r2:"]');  
    
    
    await t
        .click(Selector('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1tucxem'))  // Button for Employee view
        .click(Selector('p').withText('Switch to Employee')); 

    
    const addTaskButton = Selector('button').withText('Add Task');  
    await t.click(addTaskButton);


    const taskTitleInput = Selector('p').withText('Task Create');  

    const superCategoryDropdown = Selector('input').withAttribute('placeholder', 'Select Super Category');
     const option= Selector('.MuiAutocomplete-popper').find('li').withText('Product Developments');
     await t.click(superCategoryDropdown).typeText(superCategoryDropdown,'Product Developments').pressKey('down enter');

   
    const subCategoryDropdown = Selector('input').withAttribute('placeholder', 'Select Sub Category');
    const option1= Selector('.MuiAutocomplete-popper').find('li').withText('Extra Images');
    await t.click(subCategoryDropdown).typeText(subCategoryDropdown,'Extra Images').pressKey('down enter')  

   
    const portalsDropdown = Selector('input').withAttribute('placeholder', 'Select Portals');
    const option2= Selector('.MuiAutocomplete-popper').find('li').withText('Amazon');
    await t.click(portalsDropdown).typeText(portalsDropdown,'Amazon').pressKey('down enter')

    
    const productsDropdown = Selector('input').withAttribute('placeholder', 'Select Products');
    const option3= Selector('.MuiAutocomplete-popper').find('li').withText('Dhathri Aloevera Body Lotion');
    
    
    await t
    .click(productsDropdown)  
    .typeText(productsDropdown, 'Dhathri Aloevera Body Lotion')  
    .pressKey('down enter')  
    .expect(option3.exists).ok('Product option is not available');  
    await t.click(option3);


    
    const taskNameDropdown = Selector('input').withAttribute('placeholder', 'Select Task Name');
    const option4= Selector('.MuiAutocomplete-popper').find('li').withText('Test Task');
    await t.click(taskNameDropdown).typeText(taskNameDropdown,'Test Task').pressKey('down enter')
    
    
    const assigneeDropdown = Selector('input').withAttribute('placeholder', 'Select Assignee');
    const option5= Selector('.MuiAutocomplete-popper').find('li').withText('Lokesh');
    await t.click(assigneeDropdown).typeText(assigneeDropdown,'Lokesh').pressKey('down enter')
    

   
    const reviewersDropdown = Selector('input').withAttribute('placeholder', 'Select Reviewers');
    const option6= Selector('.MuiAutocomplete-popper').find('li').withText('Lokesh');
    await t.click(reviewersDropdown).typeText(reviewersDropdown,'Lokesh').pressKey('down enter')
    

    const priorityDropdown = Selector('input').withAttribute('placeholder', 'Select Priority');
    const option7= Selector('.MuiAutocomplete-popper').find('li').withText('High');
    await t.click(priorityDropdown).typeText(priorityDropdown,'High').pressKey('down enter')
    

   
    const dueDateField = Selector('input').withAttribute('placeholder', 'DD/MM/YYYY');
    await t.typeText(dueDateField, '30/03/2025');


    const descriptionField =Selector('//div[@class="ql-editor"]');
    await t.typeText(descriptionField, 'This is a test task');
   



    const submitButton = Selector('button').withText('Submit');
    await t.click(submitButton);

    
    const taskInList = Selector('button').withText('Yes, create it!');  
        await t.expect(taskInList.exists).ok('Task was not created successfully');
    });
    
 test('Negative Test - Submit Form with Missing Required Fields', async t => {
    
    
        await t
            .typeText('input[name="username"]', 'demouser@easecommerce.in')  
            .typeText('input[name="password"]', 'cE7iQPP^')  
            .click('button[id=":r2:"]');  
    
    
        await t
            .click(Selector('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1tucxem'))  // Button for Employee view
            .click(Selector('p').withText('Switch to Employee')); 
    
        // Click on "Add Task" button
        const addTaskButton = Selector('button').withText('Add Task');  
        await t.click(addTaskButton);
    
       
        const superCategoryDropdown = Selector('input').withAttribute('placeholder', 'Select Super Category');
        await t.click(superCategoryDropdown).typeText(superCategoryDropdown, 'Product Developments').pressKey('down enter');
    
        const subCategoryDropdown = Selector('input').withAttribute('placeholder', 'Select Sub Category');
        await t.click(subCategoryDropdown).typeText(subCategoryDropdown, 'Extra Images').pressKey('down enter');
    
        const portalsDropdown = Selector('input').withAttribute('placeholder', 'Select Portals');
        await t.click(portalsDropdown).typeText(portalsDropdown, 'Amazon').pressKey('down enter');
    
        const productsDropdown = Selector('input').withAttribute('placeholder', 'Select Products');
    const option3= Selector('.MuiAutocomplete-popper').find('li').withText('Dhathri Aloevera Body Lotion');
    
    
    await t
    .click(productsDropdown)  
    .typeText(productsDropdown, 'Dhathri Aloevera Body Lotion')  
    .pressKey('down enter')  
    .expect(option3.exists).ok('Product option is not available');  
    await t.click(option3);
    
    
        const dueDateField = Selector('input').withAttribute('placeholder', 'DD/MM/YYYY');
        await t.typeText(dueDateField, '30/03/2025');
        
        const submitButton = Selector('button').withText('Submit');
        await t.expect(submitButton.hasAttribute('disabled')).ok('Submit button is not disabled with missing required fields');
    });