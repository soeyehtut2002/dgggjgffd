let members = [
    { id: 123456, name: 'John Doe', membership: 'Gold', gender: 'Male', email: 'john@example.com', art: 'Painting' },
    { id: 234567, name: 'Jane Smith', membership: 'Silver', gender: 'Female', email: 'jane@example.com', art: 'Sculpture' },
    { id: 345678, name: 'Michael Johnson', membership: 'Platinum', gender: 'Male', email: 'michael@example.com', art: 'Photography' },
    { id: 456789, name: 'Anna Davis', membership: 'Gold', gender: 'Female', email: 'anna@example.com', art: 'Dance' }
  ];
  
  let schedules = [
    { id: 1, time: '8:00 AM - 10:00 AM', day: 'Monday' },
    { id: 2, time: '5:00 PM - 7:00 PM', day: 'Wednesday' }
  ];
  
  function displayMembers() {
    const memberTable = document.getElementById('memberTable');
    memberTable.innerHTML = '';
  
    members.forEach(member => {
      const row = memberTable.insertRow();
      row.innerHTML = `<td>${member.id}</td>
                       <td>${member.name}</td>
                       <td>${member.membership}</td>
                       <td>${member.gender}</td>
                       <td>${member.email}</td>
                       <td>${member.art}</td>
                       <td><button onclick="editMember(${member.id})">Edit</button>
                           <button onclick="deleteMember(${member.id})">Delete</button></td>`;
    });
  }
  
  function displaySchedules() {
    const scheduleTable = document.getElementById('scheduleTable');
    scheduleTable.innerHTML = '';
  
    schedules.forEach(schedule => {
      const row = scheduleTable.insertRow();
      row.innerHTML = `<td>${schedule.id}</td>
                       <td>${schedule.time}</td>
                       <td>${schedule.day}</td>
                       <td><button onclick="editSchedule(${schedule.id})">Edit</button>
                           <button onclick="deleteSchedule(${schedule.id})">Delete</button></td>`;
    });
  }
  
  function openMemberManagement() {
    const memberManagement = document.getElementById('memberManagement');
    const scheduleManagement = document.getElementById('scheduleManagement');
    const addMemberForm = document.getElementById('addMemberForm');
  
    memberManagement.style.display = 'block';
    scheduleManagement.style.display = 'none';
    addMemberForm.style.display = 'none';
  
    displayMembers();
  }
  
  function openScheduleManagement() {
    const memberManagement = document.getElementById('memberManagement');
    const scheduleManagement = document.getElementById('scheduleManagement');
  
    memberManagement.style.display = 'none';
    scheduleManagement.style.display = 'block';
  
    displaySchedules();
  }
  
  function getRandomMemberId() {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit random number
  }
  
  function addMember() {
    const addMemberForm = document.getElementById('addMemberForm');
    addMemberForm.style.display = 'block';
  }
  
  function submitMember() {
    const name = document.getElementById('memberName').value;
    const membership = document.getElementById('membership').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const art = document.getElementById('art').value;
  
    if (name && membership && gender && email && art) {
      const newMember = {
        id: getRandomMemberId(), // Generate a random 6-digit ID
        name: name,
        membership: membership,
        gender: gender,
        email: email,
        art: art
      };
  
      members.push(newMember);
      displayMembers();
  
      // Reset the form
      document.getElementById('addMemberForm').reset();
      document.getElementById('addMemberForm').style.display = 'none';
    }
  }
  
  // Rest of the code remains the same...
  
  
  
  function editMember(memberId) {
    const member = members.find(member => member.id === memberId);
  
    // Populate the edit form with member data
    document.getElementById('editMemberId').value = member.id;
    document.getElementById('editMemberName').value = member.name;
    document.getElementById('editMembership').value = member.membership;
    document.getElementById('editGender').value = member.gender;
    document.getElementById('editEmail').value = member.email;
    document.getElementById('editArt').value = member.art;
  
    // Display the edit form
    const editMemberForm = document.getElementById('editMemberForm');
    editMemberForm.style.display = 'block';
  }
  
  function submitEditedMember() {
    const memberId = parseInt(document.getElementById('editMemberId').value);
    const newName = document.getElementById('editMemberName').value;
    const newMembership = document.getElementById('editMembership').value;
    const newGender = document.getElementById('editGender').value;
    const newEmail = document.getElementById('editEmail').value;
    const newArt = document.getElementById('editArt').value;
  
    const memberIndex = members.findIndex(member => member.id === memberId);
  
    if (memberIndex !== -1) {
      members[memberIndex] = {
        id: memberId,
        name: newName,
        membership: newMembership,
        gender: newGender,
        email: newEmail,
        art: newArt
      };
  
      displayMembers();
      document.getElementById('editMemberForm').style.display = 'none';
    }
  }
  
  function cancelEdit() {
    document.getElementById('editMemberForm').style.display = 'none';
  }
  
  function deleteMember(memberId) {
    members = members.filter(member => member.id !== memberId);
    displayMembers();
  }
  
  function addSchedule() {
    const newSchedule = {
      id: schedules.length + 1,
      time: prompt('Enter schedule time:'),
      day: prompt('Enter schedule day:')
    };
  
    if (newSchedule.time && newSchedule.day) {
      schedules.push(newSchedule);
      displaySchedules();
    }
  }
  
  function editSchedule(scheduleId) {
    const schedule = schedules.find(schedule => schedule.id === scheduleId);
    const newTime = prompt('Edit schedule time:', schedule.time);
    const newDay = prompt('Edit schedule day:', schedule.day);
  
    if (newTime && newDay) {
      schedule.time = newTime;
      schedule.day = newDay;
      displaySchedules();
    }
  }
  
  function deleteSchedule(scheduleId) {
    schedules = schedules.filter(schedule => schedule.id !== scheduleId);
    displaySchedules();
  }
  
  function closeForm() {
    const addMemberForm = document.getElementById('addMemberForm');
    addMemberForm.style.display = 'none';
  }
  
  function closeEditForm() {
    const editMemberForm = document.getElementById('editMemberForm');
    editMemberForm.style.display = 'none';
  }

  function getRandomMemberId() {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit random number
  }
  
  function closeEditForm() {
    const editMemberForm = document.getElementById('editMemberForm');
    editMemberForm.reset();  // Reset the form to clear input fields
    editMemberForm.style.display = 'none';
  }
  
  // Rest of the code remains the same...
  
  