package com.ths.JDO.Component;

import java.util.ArrayList;
import java.util.List;

import com.google.appengine.api.datastore.Text;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class TechnicalDefinitionJDO {
	@Id
	@Index
	private Long technicalDefinitionID;
	@Index
	private String componentID;
	@Index
	private String projectManager;
	@Index
	private String rAndDManager;
	@Index
	private String projectPhase;
	@Index
	private String valeoReference;
	@Index
	private String technology;
	@Index
	private String wbsCode;
	@Index
	private String beCode;
	@Index
	private String mipPWACode;
	@Index
	private boolean validationProcess;
	@Index
	private boolean planofLabTests;
	@Index
	private String nomenClature;
	@Index
	private String plan;
	@Index
	private Text comment;
	
	@Index
	private List<Long> planOfLabTestsReference=new ArrayList<Long>();
	public TechnicalDefinitionJDO()
	{
		
	}
	public Long getTechnicalDefinitionID() {
		return technicalDefinitionID;
	}
	public void setTechnicalDefinitionID(Long technicalDefinitionID) {
		this.technicalDefinitionID = technicalDefinitionID;
	}
	public String getComponentID() {
		return componentID;
	}
	public void setComponentID(String componentID) {
		this.componentID = componentID;
	}
	public String getProjectManager() {
		return projectManager;
	}
	public void setProjectManager(String projectManager) {
		this.projectManager = projectManager;
	}
	public String getrAndDManager() {
		return rAndDManager;
	}
	public void setrAndDManager(String rAndDManager) {
		this.rAndDManager = rAndDManager;
	}
	public String getProjectPhase() {
		return projectPhase;
	}
	public void setProjectPhase(String projectPhase) {
		this.projectPhase = projectPhase;
	}
	public String getValeoReference() {
		return valeoReference;
	}
	public void setValeoReference(String valeoReference) {
		this.valeoReference = valeoReference;
	}
	public String getTechnology() {
		return technology;
	}
	public void setTechnology(String technology) {
		this.technology = technology;
	}
	public String getWbsCode() {
		return wbsCode;
	}
	public void setWbsCode(String wbsCode) {
		this.wbsCode = wbsCode;
	}
	public String getBeCode() {
		return beCode;
	}
	public void setBeCode(String beCode) {
		this.beCode = beCode;
	}
	public String getMipPWACode() {
		return mipPWACode;
	}
	public void setMipPWACode(String mipPWACode) {
		this.mipPWACode = mipPWACode;
	}
	public boolean isValidationProcess() {
		return validationProcess;
	}
	public void setValidationProcess(boolean validationProcess) {
		this.validationProcess = validationProcess;
	}
	public boolean isPlanofLabTests() {
		return planofLabTests;
	}
	public void setPlanofLabTests(boolean planofLabTests) {
		this.planofLabTests = planofLabTests;
	}
	public String getNomenClature() {
		return nomenClature;
	}
	public void setNomenClature(String nomenClature) {
		this.nomenClature = nomenClature;
	}
	public String getPlan() {
		return plan;
	}
	public void setPlan(String plan) {
		this.plan = plan;
	}
	public Text getComment() {
		return comment;
	}
	public void setComment(Text comment) {
		this.comment = comment;
	}
	public List<Long> getPlanOfLabTestsReference() {
		return planOfLabTestsReference;
	}
	public void setPlanOfLabTestsReference(List<Long> planOfLabTestsReference) {
		this.planOfLabTestsReference = planOfLabTestsReference;
	}
	
	
}
