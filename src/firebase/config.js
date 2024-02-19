import firestore from '@react-native-firebase/firestore';


export const getProfile = async (profileId) => {
  try {
        const usersCollection = await firestore().collection('user-profiles').doc(JSON.stringify(profileId)).get()
        console.log(`Profile #${profileId}`,usersCollection)
        return usersCollection.data(); // Return the profile data
    } catch (error) {
        console.error('Error fetching profile:', error);
        return null;
    }
}

export const postProfile = async (profileId, profileData) => {
    try {
        // Use set() to create a new document or update an existing document
        await firestore().collection('user-profiles').doc(JSON.stringify(profileId)).set(profileData);
        console.log('Profile posted successfully');
    } catch (error) {
        console.error('Error posting profile:', error);
    }
}