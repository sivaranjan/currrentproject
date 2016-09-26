package com.ths.service;

import java.util.UUID;

public class UuidGeneratorHelper {
	public static String getUniqueId() {
		return UUID.randomUUID().toString();
	}
}