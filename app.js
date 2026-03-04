// 1️⃣ User Details
function showUserDetails({ fname, lname, age, nativePlace, qualification, email }) {

    let result = `
            <h5>User Information</h5>
            <p><strong>First Name:</strong> ${fname}</p>
            <p><strong>Last Name:</strong> ${lname}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Native Place:</strong> ${nativePlace}</p>
            <p><strong>Qualification:</strong> ${qualification}</p>
            <p><strong>Email:</strong> ${email}</p>
    `;

    document.getElementById("info1").innerHTML = result;
}



// 2️⃣ Employee Details
function showEmployeeDetails({ empId, name, department, designation, salary, location }) {

    let result = `
            <h5>Employee Information</h5>
            <p><strong>Employee ID:</strong> ${empId}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Department:</strong> ${department}</p>
            <p><strong>Designation:</strong> ${designation}</p>
            <p><strong>Salary:</strong> ${salary}</p>
            <p><strong>Location:</strong> ${location}</p>
    `;

    document.getElementById("info2").innerHTML = result;
}



// 3️⃣ Product Details
function showProductDetails({ productName, brand, category, price, description }) {

    let result = `
            <h5>Product Information</h5>
            <p><strong>Product Name:</strong> ${productName}</p>
            <p><strong>Brand:</strong> ${brand}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Description:</strong> ${description}</p>
    `;

    document.getElementById("info3").innerHTML = result;
}



// 4️⃣ Student Details
function showStudentDetails({ rollNo, name, course, college, university, year }) {

    let result = `
            <h5>Student Information</h5>
            <p><strong>Roll No:</strong> ${rollNo}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Course:</strong> ${course}</p>
            <p><strong>College:</strong> ${college}</p>
            <p><strong>University:</strong> ${university}</p>
            <p><strong>Year:</strong> ${year}</p>
    `;

    document.getElementById("info4").innerHTML = result;
}



// 5️⃣ Bank Details
function showBankDetails({ accountHolder, accountNumber, branch, ifscCode, accountType, balance }) {

    let result = `
            <h5>Bank Account Details</h5>
            <p><strong>Account Holder:</strong> ${accountHolder}</p>
            <p><strong>Account Number:</strong> ${accountNumber}</p>
            <p><strong>Branch:</strong> ${branch}</p>
            <p><strong>IFSC Code:</strong> ${ifscCode}</p>
            <p><strong>Account Type:</strong> ${accountType}</p>
            <p><strong>Balance:</strong> ${balance}</p>
    `;

    document.getElementById("info5").innerHTML = result;
}



// 6️⃣ Order Details
function showOrderDetails({ orderId, customerName, productName, quantity, price, orderDate }) {

    let result = `
            <h5>Order Details</h5>
            <p><strong>Order ID:</strong> ${orderId}</p>
            <p><strong>Customer Name:</strong> ${customerName}</p>
            <p><strong>Product Name:</strong> ${productName}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Order Date:</strong> ${orderDate}</p>
    `;

    document.getElementById("info6").innerHTML = result;
}



// 7️⃣ Movie Details
function showMovieDetails({ title, director, producer, musicDirector, releaseYear, language }) {

    let result = `
            <h5>Movie Details</h5>
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>Director:</strong> ${director}</p>
            <p><strong>Producer:</strong> ${producer}</p>
            <p><strong>Music Director:</strong> ${musicDirector}</p>
            <p><strong>Release Year:</strong> ${releaseYear}</p>
            <p><strong>Language:</strong> ${language}</p>
    `;

    document.getElementById("info7").innerHTML = result;
}



// 8️⃣ Car Details
function showCarDetails({ brand, model, variant, fuelType, transmission, price }) {

    let result = `
            <h5>Car Details</h5>
            <p><strong>Brand:</strong> ${brand}</p>
            <p><strong>Model:</strong> ${model}</p>
            <p><strong>Variant:</strong> ${variant}</p>
            <p><strong>Fuel Type:</strong> ${fuelType}</p>
            <p><strong>Transmission:</strong> ${transmission}</p>
            <p><strong>Price:</strong> ${price}</p>

    `;

    document.getElementById("info8").innerHTML = result;
}



// 9️⃣ Course Details
function showCourseDetails({ courseName, instructor, duration, platform, level, fees }) {

    let result = `
            <h5>Course Details</h5>
            <p><strong>Course Name:</strong> ${courseName}</p>
            <p><strong>Instructor:</strong> ${instructor}</p>
            <p><strong>Duration:</strong> ${duration}</p>
            <p><strong>Platform:</strong> ${platform}</p>
            <p><strong>Level:</strong> ${level}</p>
            <p><strong>Fees:</strong> ${fees}</p>
    `;

    document.getElementById("info9").innerHTML = result;
}



// 🔟 Company Details
function showCompanyDetails({ companyName, founder, ceo, headquarters, establishedYear, employees }) {

    let result = `
            <h5>Company Details</h5>
            <p><strong>Company Name:</strong> ${companyName}</p>
            <p><strong>Founder:</strong> ${founder}</p>
            <p><strong>CEO:</strong> ${ceo}</p>
            <p><strong>Headquarters:</strong> ${headquarters}</p>
            <p><strong>Established Year:</strong> ${establishedYear}</p>
            <p><strong>Total Employees:</strong> ${employees}</p>
    `;

    document.getElementById("info10").innerHTML = result;
}




// ✅ OBJECTS

let user = {
    fname: "Rahul",
    lname: "Sharma",
    age: 23,
    nativePlace: "Chennai",
    qualification: "B.Tech IT",
    email: "rahul@gmail.com"
};

let employee = {
    empId: "EMP101",
    name: "Anita Verma",
    department: "Human Resources",
    designation: "HR Manager",
    salary: "45,000",
    location: "Bangalore"
};

let product = {
    productName: "Laptop",
    brand: "Dell",
    category: "Electronics",
    price: "65,000",
    description: "15.6 inch display, 16GB RAM, 512GB SSD"
};

let student = {
    rollNo: "21CS101",
    name: "Arun Kumar",
    course: "B.Sc Computer Science",
    college: "ABC Arts & Science College",
    university: "Madras University",
    year: "Final Year"
};

let bank = {
    accountHolder: "Priya Sharma",
    accountNumber: "123456789012",
    branch: "T Nagar",
    ifscCode: "SBIN0001234",
    accountType: "Savings",
    balance: "2,50,000"
};

let order = {
    orderId: "ORD1001",
    customerName: "Ramesh Kumar",
    productName: "Smartphone",
    quantity: "2",
    price: "30,000",
    orderDate: "10-02-2026"
};

let movie = {
    title: "Leo",
    director: "Lokesh Kanagaraj",
    producer: "S. S. Lalit Kumar",
    musicDirector: "Anirudh Ravichander",
    releaseYear: "2023",
    language: "Tamil"
};

let car = {
    brand: "Hyundai",
    model: "Creta",
    variant: "SX(O)",
    fuelType: "Petrol",
    transmission: "Automatic",
    price: "18,00,000"
};

let course = {
    courseName: "Full Stack Web Development",
    instructor: "Mr. Rajesh",
    duration: "6 Months",
    platform: "Online",
    level: "Intermediate",
    fees: "45,000"
};

let company = {
    companyName: "Tech Solutions Pvt Ltd",
    founder: "Karthik Raman",
    ceo: "Meena Krishnan",
    headquarters: "Chennai, India",
    establishedYear: "2015",
    employees: "350"
};


// ✅ FUNCTION CALLS

showUserDetails(user);
showEmployeeDetails(employee);
showProductDetails(product);
showStudentDetails(student);
showBankDetails(bank);
showOrderDetails(order);
showMovieDetails(movie);
showCarDetails(car);
showCourseDetails(course);
showCompanyDetails(company);