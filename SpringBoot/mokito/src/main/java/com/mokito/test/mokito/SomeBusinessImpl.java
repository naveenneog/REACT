package com.mokito.test.mokito;

public class SomeBusinessImpl {
	private DataService dataService;
	
	public SomeBusinessImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}

	int findGreatestFromAllData(){
		int[] data = dataService.retriveAllData();
		int greatest = Integer.MIN_VALUE;
		System.out.println(greatest);
		for(int val : data){
			if(val > greatest){
				greatest = val;
			}
		}
		System.out.println("The Great Value is" +greatest);
		return greatest;
	}
}

