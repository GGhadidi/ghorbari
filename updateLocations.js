const fs = require('fs');

try {
    // Read the source JSON files
    const divisionsData = JSON.parse(fs.readFileSync('bd-divisions.json', 'utf8'));
    const districtsData = JSON.parse(fs.readFileSync('bd-districts.json', 'utf8'));
    const upazilasData = JSON.parse(fs.readFileSync('bd-upazilas.json', 'utf8'));

    const divisions = divisionsData.divisions || divisionsData;
    const districts = districtsData.districts || districtsData;
    const upazilas = upazilasData.upazilas || upazilasData;

    // Create the nested structure
    const locations = {};
    divisions.forEach(division => {
        locations[division.name] = {};
    });

    districts.forEach(district => {
        const division = divisions.find(d => d.id === district.division_id);
        if (division && locations[division.name]) {
            locations[division.name][district.name] = [];
        }
    });

    upazilas.forEach(upazila => {
        const district = districts.find(d => d.id === upazila.district_id);
        if (district) {
            const division = divisions.find(d => d.id === district.division_id);
            if (division && locations[division.name] && locations[division.name][district.name]) {
                locations[division.name][district.name].push(upazila.name);
            }
        }
    });
    
    // Read the page component
    const pageContent = fs.readFileSync('app/explore/page.tsx', 'utf8');

    // Replace the placeholder with the new data
    const locationsString = JSON.stringify(locations, null, 2);
    const updatedPageContent = pageContent.replace(/const locations = {[\s\S]*?};/, 'const locations = ' + locationsString + ';');

    // Write the updated content back to the file
    fs.writeFileSync('app/explore/page.tsx', updatedPageContent);

    console.log('Successfully updated app/explore/page.tsx with complete location data.');

} catch (error) {
    console.error('An error occurred:', error);
} finally {
    // Clean up the downloaded files
    try {
      fs.unlinkSync('bd-divisions.json');
      fs.unlinkSync('bd-districts.json');
      fs.unlinkSync('bd-upazilas.json');
    } catch (cleanupError) {
      console.error('Error during cleanup:', cleanupError.message);
    }
} 