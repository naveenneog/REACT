package com.mokito.test.mokito;

import static org.junit.Assert.*;

import org.junit.Test;

public class SomeBusinessStubTest {

	@Test
	public void testFindGreatestFromAllData() {
		SomeBusinessImpl businessImpl = new SomeBusinessImpl(new DataServiceStub());
		int result = businessImpl.findGreatestFromAllData();
		assertEquals(24, result);
		
	}

}
class DataServiceStub implements DataService{

	@Override
	public int[] retriveAllData() {
		return new int[]{24,12,2};
	}
	
}