import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '../contexts/AuthContext';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';

const SignupForm = () => {
  const { signup } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    city: '',
    region: '',
    postalCode: '',
    dateOfBirth: '',
    cnicNo: '',
    phoneNumber: ''
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async () => {
    try {

      const userCredential = await signup(formData.email, formData.password);
      const user = userCredential.user;

      await addDoc(collection(db, 'users'), {
        userId: user.uid,
        firstName: formData.firstName || '',
        lastName: formData.lastName || '',
        email: formData.email || '',
        password: formData.password || '',
        address: formData.address || '',
        city: formData.city || '',
        region: formData.region || '',
        postalCode: formData.postalCode || '',
        dateOfBirth: formData.dateOfBirth || '',
        cnicNo: formData.cnicNo || '',
        phoneNumber: formData.phoneNumber || ''
      });

      console.log("User signed up successfully and data stored in Firestore!");

    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };


  return (
    <View className="w-full h-full p-4 bg-white">
      {/* logo */}
      <View className="flex flex-row items-center justify-center mt-28">
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            resizeMode: "cover",
            height: 200,
            width: 250,
          }}
        />
      </View>

      {/*signup text  */}
      <View className="mt-3 mb-5">
        <Text className="text-3xl font-semibold text-gray-900">Sign Up</Text>
      </View>

      {/* form feilds for step 1 */}
      {step === 1 && (
        <View className="mt-3">
          <Text className="mb-5 font-normal text-gray-600 text-md">
            Step 1: Enter your Basic Information
          </Text>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">First Name</Text>
            <TextInput
              className="w-full px-2 py-2 border border-gray-300 rounded-lg text-md"
              placeholder="Enter your First Name"
              value={formData.firstName}
              onChangeText={(text) =>
                setFormData({ ...formData, firstName: text })
              }
            />
          </View>
          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Last Name</Text>
            <TextInput
              className="w-full px-2 py-2 border border-gray-300 rounded-lg text-md"
              placeholder="Enter your last Name"
              value={formData.lastName}
              onChangeText={(text) =>
                setFormData({ ...formData, lastName: text })
              }
            />
          </View>
          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Email address</Text>
            <TextInput
              className="w-full px-2 py-2 border border-gray-300 rounded-lg text-md"
              placeholder="Enter your email"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
          </View>
          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Password</Text>
            <TextInput
              className="w-full px-2 py-2 border border-gray-300 rounded-lg text-md"
              placeholder="Enter your password"
              secureTextEntry={true}
              autoCapitalize="none"
              value={formData.password}
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
            />
          </View>
        </View>
      )}

      {/* form feilds for step 2 */}
      {step === 2 && (
        <View className="mt-3">
          <Text className="mb-5 font-normal text-gray-600 text-md">
            Step 2: Enter your Address Information
          </Text>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Address</Text>
            <TextInput
              className="w-full px-2 py-2 border border-gray-300 rounded-lg text-md"
              placeholder="Enter your Address"
              value={formData.address}
              onChangeText={(text) =>
                setFormData({ ...formData, address: text })
              }
            />
          </View>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">City</Text>
            <TextInput
              className="w-full px-2 py-2 border border-gray-300 rounded-lg text-md"
              placeholder="Enter your City"
              value={formData.city}
              onChangeText={(text) => setFormData({ ...formData, city: text })}
            />
          </View>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Region</Text>
            <TextInput
              className="w-full px-2 py-2 border border-gray-300 rounded-lg text-md"
              placeholder="Enter your Region"
              value={formData.region}
              onChangeText={(text) => setFormData({ ...formData, region: text })}
            />
          </View>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Postal Code</Text>
            <TextInput
              className="w-full px-2 py-2 border border-gray-300 rounded-lg text-md"
              placeholder="Enter your Postal Code"
              value={formData.postalCode}
              onChangeText={(text) =>
                setFormData({ ...formData, postalCode: text })
              }
            />
          </View>
        </View>
      )}

      {/* form feilds for step 3 */}
      {step === 3 && (
        <View className="mt-3">
          <Text className="mb-5 font-normal text-gray-600 text-md">
            Step 3: Enter your Additional Information
          </Text>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Date of Birth</Text>
            <TextInput
              className="w-full px-2 py-2 border border-gray-300 rounded-lg text-md"
              placeholder="Enter your Date of Birth"
              value={formData.dateOfBirth}
              onChangeText={(text) =>
                setFormData({ ...formData, dateOfBirth: text })
              }
            />
          </View>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">CNIC No</Text>
            <TextInput
              className="w-full px-2 py-2 border border-gray-300 rounded-lg text-md"
              placeholder="Enter your CNIC No"
              value={formData.cnicNo}
              onChangeText={(text) => setFormData({ ...formData, cnicNo: text })}
              secureTextEntry
            />
          </View>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Phone Number</Text>
            <TextInput
              className="w-full px-2 py-2 border border-gray-300 rounded-lg text-md"
              placeholder="Enter your Phone Number"
              value={formData.phoneNumber}
              onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
              secureTextEntry
            />
          </View>
        </View>
      )}

      {/* Pagination Buttons */}
      <View className="flex flex-row justify-center gap-5">
        <TouchableOpacity onPress={handleBack} disabled={step === 1}>
          <View
            className="flex flex-row justify-center p-3 mt-4 mb-5 rounded-full h-14"
            style={{
              width: 50,
              backgroundColor: step === 1 ? "#CBD5E0" : "#4A90E2",
            }}
          >
            <MaterialIcons
              name="arrow-back-ios"
              size={18}
              color="white"
              className="mt-1"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} disabled={step === 3}>
          <View
            className="flex flex-row justify-center p-3 mt-4 mb-5 ml-32 rounded-full h-14"
            style={{
              width: 50,
              backgroundColor: step === 3 ? "#CBD5E0" : "#4A90E2",
            }}
          >
            <MaterialIcons
              name="arrow-forward-ios"
              size={18}
              color="white"
              className="mt-1"
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Submit Form Button */}
      {step === 3 && (
        <TouchableOpacity onPress={handleSubmit}>
          <View className="items-center justify-center w-full p-3 mt-8 rounded-lg bg-bankGradient h-14">
            <Text className="m-1 text-center text-white text-md">Submit</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SignupForm;
