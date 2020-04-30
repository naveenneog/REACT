package com.mokito.test.mokito;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class SomeBusinessMockAnnotationsTest {
	@Mock
	DataService dataServiceMock;
	
	@InjectMocks
	SomeBusinessImpl businessImpl;
	
	@Test
	public void testFindGreatestFromAllData() {
		
		when(dataServiceMock.retriveAllData()).thenReturn(new int[]{12,2,1,24});
		assertEquals(24, businessImpl.findGreatestFromAllData());
		
	}
	@Test
	public void testFindGreatestFromAllData_OneVal() {
		
		when(dataServiceMock.retriveAllData()).thenReturn(new int[]{2});
		assertEquals(2, businessImpl.findGreatestFromAllData());
		
	}
	
	@Test
	public void testFindGreatestFromAllData_EmptyVal() {
		
		when(dataServiceMock.retriveAllData()).thenReturn(new int[]{ });
		assertEquals(Integer.MIN_VALUE, businessImpl.findGreatestFromAllData());
		
	}

}
