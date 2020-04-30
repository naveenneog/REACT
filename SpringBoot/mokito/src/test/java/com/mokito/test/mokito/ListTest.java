package com.mokito.test.mokito;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.Test;
import org.mockito.Mockito;

public class ListTest {

	@Test
	public void testMultiple() {
		List list = mock(List.class);
		when(list.size()).thenReturn(10).thenReturn(20);
		assertEquals(10, list.size());
		assertEquals(20, list.size());
		assertEquals(20, list.size());
	}

	@Test
	public void testGet() {
		List list = mock(List.class);
		when(list.get(Mockito.anyInt())).thenReturn("Some String");
		assertEquals("Some String", list.get(0));
		assertEquals("Some String", list.get(1));
	}
}
