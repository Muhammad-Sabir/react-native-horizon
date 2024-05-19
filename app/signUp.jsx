import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    dateOfBirth: '',
    ssn: '',
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <View className="w-full bg-white p-4 h-full">

      {/* logo */}
      <View className="flex flex-row items-center p-20 mt-16">
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode='contain'
          style={{ width: 400, height: 300 }}
        />
      </View>

      {/*signup text  */}
      <View className='mt-3 mb-5'>
        <Text className='text-2xl font-semibold text-gray-900'>Sign Up</Text>
      </View>

      {/* form feilds for step 1 */}
      {step === 1 && (
        <View className='mt-3'>
          <Text className='text-lg font-normal text-gray-600 mb-5'>Step 1: Enter your Basic Information</Text>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">First Name</Text>
            <TextInput
              className="w-full py-2 px-2 rounded-lg border border-gray-300 text-md"
              placeholder="Enter your First Name"
              value={formData.firstName}
              onChangeText={text => setFormData({ ...formData, firstName: text })}
            />
          </View>
          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Last Name</Text>
            <TextInput
              className="w-full py-2 px-2 rounded-lg border border-gray-300 text-md"
              placeholder="Enter your last Name"
              value={formData.lastName}
              onChangeText={text => setFormData({ ...formData, lastName: text })}

            />
          </View>
          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Email address</Text>
            <TextInput
              className="w-full py-2 px-2 rounded-lg border border-gray-300 text-md"
              placeholder="Enter your email"
              value={formData.email}
              onChangeText={text => setFormData({ ...formData, email: text })}

            />
          </View>
          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Password</Text>
            <TextInput
              className="w-full py-2 px-2 rounded-lg border border-gray-300 text-md"
              placeholder="Enter your password"
              secureTextEntry={true}
              autoCapitalize='none'
              value={formData.password}
              onChangeText={text => setFormData({ ...formData, password: text })}
            />
          </View>
        </View>
      )}

      {/* form feilds for step 2 */}
      {step === 2 && (
        <View className='mt-3'>
          <Text className='text-lg font-normal text-gray-600 mb-5'>Step 2: Enter your Address Information</Text>
          
          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Address</Text>
            <TextInput
              className="w-full py-2 px-2 rounded-lg border border-gray-300 text-md"
              placeholder="Enter your Address"
              value={formData.address}
              onChangeText={text => setFormData({ ...formData, address: text })}
            />
          </View>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">City</Text>
            <TextInput
              className="w-full py-2 px-2 rounded-lg border border-gray-300 text-md"
              placeholder="Enter your City"
              value={formData.city}
              onChangeText={text => setFormData({ ...formData, city: text })}
            />
          </View>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">State</Text>
            <TextInput
              className="w-full py-2 px-2 rounded-lg border border-gray-300 text-md"
              placeholder="Enter your State"
              value={formData.state}
              onChangeText={text => setFormData({ ...formData, state: text })}
            />
          </View>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Postal Code</Text>
            <TextInput
              className="w-full py-2 px-2 rounded-lg border border-gray-300 text-md"
              placeholder="Enter your Postal Code"
              value={formData.postalCode}
              onChangeText={text => setFormData({ ...formData, postalCode: text })}
            />
          </View>
        </View>
      )}

      {/* form feilds for step 3 */}
      {step === 3 && (
        <View className='mt-3'>
          <Text className='text-lg font-normal text-gray-600 mb-5'>Step 3: Enter your Additional Information</Text>
         
          <View className="gap-2 mb-5">
            <Text className="text-black text-md">Date of Birth</Text>
            <TextInput
              className="w-full py-2 px-2 rounded-lg border border-gray-300 text-md"
              placeholder="Enter your Date of Birth"
              value={formData.dateOfBirth}
              onChangeText={text => setFormData({ ...formData, dateOfBirth: text })}
            />
          </View>

          <View className="gap-2 mb-5">
            <Text className="text-black text-md">SSN</Text>
            <TextInput
              className="w-full py-2 px-2 rounded-lg border border-gray-300 text-md"
              placeholder="Enter your SSN"
              value={formData.ssn}
              onChangeText={text => setFormData({ ...formData, ssn: text })}
              secureTextEntry
            />
          </View>
        </View>
      )}

      {/* Pagination Buttons */}
      <View className="flex flex-row justify-center gap-5">
        <TouchableOpacity onPress={handleBack} disabled={step === 1}>
          <View className="flex flex-row justify-center p-3 mt-4 mb-5 h-14 rounded-full" style={{ width: 50, backgroundColor: step === 1 ? '#CBD5E0' : '#4A90E2' }}>
            <MaterialIcons name="arrow-back-ios" size={18} color="white" className="mt-1" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} disabled={step === 3}>
          <View className="flex flex-row justify-center p-3 mt-4 mb-5 ml-32 h-14 rounded-full" style={{ width: 50, backgroundColor: step === 3 ? '#CBD5E0' : '#4A90E2' }}>
            <MaterialIcons name="arrow-forward-ios" size={18} color="white" className="mt-1" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Submit Form Button */}
      {step === 3 && (
        <TouchableOpacity onPress={handleSubmit}>
          <View className="p-3 mt-8 bg-bankGradient h-14 rounded-lg justify-center items-center w-[407px]">
            <Text className="text-md text-white text-center m-1" >Submit</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SignupForm;
