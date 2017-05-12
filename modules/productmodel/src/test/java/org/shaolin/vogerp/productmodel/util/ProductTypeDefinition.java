package org.shaolin.vogerp.productmodel.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.shaolin.bmdp.json.JSONArray;
import org.shaolin.bmdp.json.JSONObject;
import org.shaolin.bmdp.utils.FileUtil;
import org.shaolin.bmdp.utils.ImageUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ProductTypeDefinition {

	private static final String UserAgent = "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2";
	private static Map<String, Map<String, String[]>> productType = new HashMap<String, Map<String, String[]>>();
	//��ҵ�豸�����
	private static Map<String, String[]> productSubType1 = new HashMap<String, String[]>();
	//����ӹ���е
	private static Map<String, String[]> productSubType2 = new HashMap<String, String[]>();
	//��𹤾�
	private static Map<String, String[]> productSubType3 = new HashMap<String, String[]>();
	//�����Ǳ�
	private static Map<String, String[]> productSubType4 = new HashMap<String, String[]>();
		
	static {

		productSubType1.put("�ü�����豸", new String[] { "���ı�", "��Ĥ��", "�ͱ�", "���ֱ�",
				"������", "�ཬ��", "�����ü�����豸", "������", "ѹ����", "������", "���۱�", "��ձ�",
				"ˮ��", "��", "���������", "��ѹ��", "�ܵ���", "������", "�ݸ˱�", "�͸�ʴ��", "���α�",
				"Ǳˮ��", "��ѹ��", "������", "��ˮ��", "��ѹ��", "������", "ת�ӱ�", "���б�" });

		productSubType1.put("����", new String[] { "���ڷ�", "�Ƿ�", "��", "����", "ֹ�ط�",
				"���Ʒ�", "��Ĥ��", "բ��", "����", "�������ż����", "������", "��ѹ��", "��ȫ��",
				"��ŷ�", "��", "��綯��", "�׷�", "��", "��������Ϸ�", "����", "������", "��ֹ��",
				"�������Ʒ�", "������", "���۷�", "ȼ����", "�ֶ���", "��ˮ��", "�Ǳ�", "������",
				"���η�", "ִ����������" });

		productSubType1.put("���", new String[] { "�������", "�������", "�������", "���������",
				"���Ĺ������", "�ؽ����", "�������", "�ǽӴ������", "������", "�����������", "���������",
				"Բ���������", "Բ׶�������", "ֱ�����", "ת�����" });

		productSubType1.put("���ߺͼо�", new String[] { "��Ƭ", "��ͷ", "�����͵���", "ϳ��",
				"�������ߺͼо�", "��Ƭ", "�оߺͼ�ͷ", "�������е����µ�", "��ݵ�����ݵ�", "����", "��װ�о�",
				"����", "����", "���Ƶ���", "�۵�" });

		productSubType1.put("���̼������Ӽ�", new String[] { "��ϼ������Ӹ���", "����", "��ĸ",
				"�������̼������Ӽ�", "�ݶ�", "��˨", "���ɺ͵�Ȧ", "����", "í��", "����" });

		productSubType1.put("�ܷ���Ϻ��ܷ��", new String[] { "��Ƭ", "�̸�", "�ͷ�",
				"�����ܷ���Ϻ��ܷ��", "�ܷ���", "��Ȧ", "ˮ��", "��е�ܷ��", "�ܷ��" });

		productSubType1.put("��и���",
				new String[] { "����", "������", "������и�����", "��б��ּ�" });

		productSubType1.put("�����豸", new String[] { "������", "���������豸", "�޳�����" });

		productSubType1.put("í���豸", new String[] { "Һѹí����" });

		productSubType1.put("Һѹ��е��Ԫ��", new String[] { "����Һѹ��е�������", "����ҺѹԪ��",
				"�ŷ���", "Һѹ��", "Һѹ��", "Һѹ�ܼ�", "Һѹ����", "Һѹ��ͷ", "Һѹ���", "Һѹ�����",
				"Һѹϵͳ", "Һѹ����", "Һѹ���̻�е" });

		productSubType1.put("�����ʹ����豸", new String[] { "����", "���ʹ�", "�������", "���ͻ�",
				"���������ʹ����豸", "������", "����", "���ϻ�", "����", "������", "��м��", "���ջ�",
				"������", "�ϸ�", "����" });

		productSubType1.put("���ֺͱ���װ��", new String[] { "����", "�������ֺͱ���װ��", "�����������ٻ�",
				"�����������ٻ�", "������" });

		productSubType1.put("�����豸", new String[] { "���ͷ������", "ȼ���������", "���ͷ������",
				"����������", "����������ͷ������", "̫���ܷ������", "�����������" });

		productSubType1.put("��ҵƤ��", new String[] { "��ҵ������", "������ҵƤ��", "����" });

		productSubType1.put("��ϴ�豸", new String[] { "ϴ�ػ�", "��ѹ��ϴ��", "��ҵϴ�»�",
				"������ϴ�豸", "���������", "������ϴ��", "��������ϴ�豸", "��ҵ�����豸", "���������ϴ��",
				"��ϴ�豸�丽��", "ɨ�ػ�", "����ϴ���" });

		productSubType1.put("���������豸", new String[] { "�����豸", "�����豸", "���������������豸",
				"��������װ��", "��ҵ��ʪ��", "��ҵ����������", "�������������豸", "�������������豸", "��������",
				"��������豸", "β������װ��", "���̾����豸" });

		productSubType1
				.put("��ˮ�����豸", new String[] { "�����", "�����豸", "�����豸",
						"������ˮ�����豸", "���ദ���豸", "��ˮ��������豸", "��ˮ�����豸���", "��ˮ�����豸",
						"��ˮ��" });

		productSubType1.put("ԭˮ�����豸", new String[] { "�����豸", "����͸�豸", "�ߴ�ˮ��ȡ�豸",
				"��ˮ�豸", "���ӽ����豸", "����ԭˮ�����豸", "��ˮ�豸", "Ӿ��ˮ�����豸", "����ˮ�����豸" });

		productSubType1.put("�յ������ͨ���豸", new String[] { "���", "��ҵ�յ�", "���������ͨ���豸",
				"���", "����̹�", "���", "��Ļ��", "��Ҷ", "������ŷ��豸���", "��ҵ����", "�ķ��",
				"���ӷ��" });

		productSubType1.put("���������豸", new String[] { "��ҵ���������豸", "�������������豸", "������",
				"���������豸���" });

		productSubType1.put("�����豸", new String[] { "�ڵ��豸", "��ú�豸", "��ˮ�豸", "�����豸",
				"���������豸" });

		productSubType1.put("��¯��¯", new String[] { "ȼú��¯", "���ȹ�¯", "ȼ����¯", "ȼ�͹�¯",
				"������¯��¯�����", "��¯���", "¯��", "���ֹ�¯", "����������������������" });

		productSubType1.put("�����豸", new String[] { "�Ƚ����豸", "�����豸", "�������Ⱥ��Ƚ����豸",
				"�����豸���", "������", "��ȴ��", "���������豸", "������", "�����" });

		productSubType1.put("���ӡ��и��豸", new String[] { "�и��豸", "�ź���", "���ܺ���", "�㺸��",
				"�纸��", "������", "���躸��", "�����Ӻ���", "�������и��", "�ܺ���", "������", "���ܻ�",
				"����С��", "��̨", "������", "������", "��������", "���⺸��", "��������", "Ħ������",
				"������", "ǥ����", "�������ӡ��и��豸", "ˮ����", "�ܺ���", "ѹ����" });

		productSubType1.put("���ӡ��и���Ϻ͸���", new String[] { "�������Ӳ��ϼ�����", "����", "��˿",
				"�纸ǯ", "����", "����", "����͸��", "����", "��Ƭ", "��ǹ", "��ͷ", "������",
				"����ͷ", "������" });

		productSubType1.put("�����豸", new String[] { "��о", "���ͻ�", "�������������豸�����",
				"���˻�", "������", "������", "ѹ���豸" });

		productSubType1.put("�����豸", new String[] { "��ʪ��", "��ʽ�����豸", "���ڸ����",
				"��Ͳ�ΰ�����", "�����豸���", "��ת��Ͳ�����豸", "���Ľ�Ҷ�����", "�����������豸", "��ʽ�����",
				"��������", "���������豸", "���������豸", "�ȷ�¯", "���������", "΢�������豸",
				"��ʽ�����豸", "��ո����", "���������豸" });

		productSubType1.put("�����豸", new String[] { "�䶳��", "��ȴ��", "��ˮ��", "���������豸",
				"����ѹ����" });

		productSubType1.put("�����豸", new String[] { "����", "��������", "ƿ��", "���������豸",
				"ʳƷ�����豸", "����" });

		productSubType1.put("���Ӹ���", new String[] { "���ӱ�λ��", "���Ӳ�����", "���ӹ��ּ�" });

		productSubType1.put("���˲���", new String[] { "������", "�˰�", "�˲�", "�˴�", "����",
				"��Ĥ", "��Ƭ", "��Ͳ", "����", "��ֽ", "�������˲���" });

		productSubType1.put("�����豸", new String[] { "���������豸", "������" });

		productSubType1.put("�����豸", new String[] { "��ĭ��", "��ȡ�豸", "�շ��豸", "���������豸",
				"�����豸" });

		productSubType1.put("�����", new String[] { "�ŷ������", "��������", "���������" });

		productSubType1.put("����ϴ���豸", new String[] { "��������ϴ���豸", "ϴ���豸�ͺ���豸",
				"�����豸" });

		productSubType1.put("ұ���豸", new String[] { "�����豸", "�����豸", "�����豸", "�Ͳļ�¯Ҥ",
				"�ж��豸", "����ұ���豸", "ұ�������豸", "ұ���豸���" });

		productSubType1.put("���켰�ȴ����豸", new String[] { "��ҵ¯", "�������켰�ȴ����豸", "ȼ����",
				"ȼ�������", "��Ƶ��Դ", "�����豸" });
		
		
		
		productSubType2
				.put("ũҵ��е", new String[] { "ũҵ����", "������е", "�����ջ��е", "����ҵ��е",
						"��ʳ�ӹ���е", "����ũҵ��е", "���ֺ�ʩ�ʻ�е", "�����", "������ҵ��е",
						"���ϼӹ��豸", "��ҵ��е", "ũ�����", "ũҵʵ���豸", "�Ź��е", "������",
						"��ľ��", "���ϼӹ��豸", "������", "", "������е", "ʳ���ͼӹ��豸", "�����豸",
						"ֲ����е", "ץ�ݻ�" });

		productSubType2.put("ʳƷ�����ϼӹ���е", new String[] { "���ϼӹ���е", "���ɻ�е",
				"��������豸", "�����豸", "����Ʒ�ӹ���е", "���߼ӹ���е", "��ͷʳƷ�ӹ���е", "�䶳ʳƷ�ӹ���е",
				"������е", "�����е", "��ƻ�е", "����ʳƷ�����ϼӹ���е", "��Ʒ��е", "����Ʒ�ӹ���е",
				"ʳƷ��װ��е", "ʳƷ�決�豸", "ʳƷɱ����ʳƷ�������������ǹ���е", "��ζƷ�ӹ���е", "����ʳƷ�ӹ���е",
				"��ʳ�ӹ���е�丽��" });

		productSubType2.put("�ư���ӡˢ��е", new String[] { "����ӡˢ��", "��ӡ��",
				"�����ư���ӡˢ��е", "��תӡ��", "��ӡ��˿ӡ��", "����ӡˢ��", "��ӡ��", "�ư��" });

		productSubType2.put("ӡǰ�����е", new String[] { "������", "������", "����",
				"����ӡǰ�����е", "ɹ���" });

		productSubType2.put("ӡ��ӹ���е", new String[] { "���ϻ�", "��Ĥ��", "���л�",
				"��װ��", "���ۻ�", "ģ�л�", "��ҳ��", "����ӡ��ӹ���е", "�Ϲ��", "�̽��", "ѹ�ۻ�",
				"ѹƽ��", "ѹ�ƻ�", "ӡˢ�������" });

		productSubType2.put("",
				new String[] { "������", "�����", "�����", "������װ��е", "��ڻ�", "��װ�����豸",
						"��װ��е�丽��", "��װ������", "���ͻ�", "�๦�ܰ�װ��", "���ֻ��Ϳ��ֻ�",
						"��װ��������", "��ϴ��", "���۽���", "��������װ��", "ɱ�����͸����", "�����" });

		productSubType2.put("�ƴ���", new String[] { "�����ƴ���", "�����ƴ���" });

		productSubType2.put("��֯��е�Ͳ���", new String[] { "��֯��", "�Ļ����", "��ɴ��",
				"��֯����", "��֯�����豸", "��֯���׵����Ǳ��豸", "��֯�첼��е", "���˻�е", "��Ͳ�����е",
				"����ë���ӹ���е", "������֯��е", "�Ͳ���Ⱦ������֯��", "֯���е", "�ü���е", "��ǰ�豸",
				"���һ�е", "�����豸", "��װ�ӹ������豸", "��װ�ӹ��豸�㲿��", "������װ�������ӹ���е", "���̻�е",
				"" });

		productSubType2.put("Ƥ��ӹ���е", new String[] { "�öϻ�", "��׻�", "Ƥ��ӹ��豸���",
				"ƬƤ��", "����Ƥ��ӹ���е" });

		productSubType2.put("��Ь��е", new String[] { "������", "���ͻ�", "��Ь��", "����",
				"ǰ���", "������Ь��е", "�Ͻ���", "Ь���ͻ�", "Ь�����", "Ь���λ�", "Ь�ۻ�", "��Ь�豸",
				"ѹ�׻�", "ѹ�ϻ�" });

		productSubType2.put("�����뽨����е", new String[] { "��������е", "���������е",
				"�ھ��е", "���������뽨����е", "·���е", "��׮��", "�ֽ��ԤӦ����е", "���̻�е���",
				"�߿���ҵ��е", "�����������", "�������ó�", "Ĩ���", "ƽ�ػ�", "�����ͻ���������е", "̯�̻�",
				"������", "ѹʵ��", "���һ�е", "װ�޻�е", "װ�ػ�е" });

		productSubType2.put("�����豸", new String[] { "������«", "������", "�綯��«",
				"���ػ�е", "ǧ�ﶥ", "���ػ���", "���������豸", "����", "�ʳ�" });

		productSubType2.put("���ϼӹ���е", new String[] { "���ܻ�", "������", "��Ĥ��",
				"�����豸", "ע�ܻ�", "�������ϼӹ���е", "������", "���ܻ�", "���������������", "�ϰ�Ļ�е",
				"���ϹܲĻ�е", "�ܻ�����", "�ܻ����", "���ϳ��ͻ�", "ѹ�ӻ�" });

		productSubType2.put("�𽺼ӹ���е", new String[] { "������", "������", "�򻯹��н���",
				"�����𽺼ӹ���е", "�����", "�𽺲öϻ�", "�𽺳��ͻ�", "�𽺶��ͻ�", "�𽺼�����", "�𽺽�ͷ��",
				"���򻯻�", "�������" });

		productSubType2.put("����ͷ�ѡ��е", new String[] { "�����", "��ѡ��ɸѡ��е", "��ѡ��е",
				"��ѡ��е", "�ּ���е", "�����", "�����е���", "��ѡ��е", "���ɡ�ѡ���е���", "���Ļ�",
				"��ĥ��", "������ѡ��ɸѡ��е", "ɰĥ��", "ˮ��ѡ���е", "��ĥ��е" });

		productSubType2.put("���ʴ�̻�е", new String[] { "��̻�", "ʴ�̻�" });

		productSubType2.put("����", new String[] { "�����豸", "�۴�", "�괲", "ĥ��",
				"����", "�ӹ�����", "ϳ��", "���ּӹ�����", "�������������", "�ⴲ", "�崲", "���ּӹ�����",
				"������и��", "��ѹ����", "���ڻ���", "������", "���Ƽӹ�����", "ľ������", "�ٴ��Ͳ崲",
				"���ػ���", "ר�û���", "�������", "��ϻ���" });

		productSubType2.put("��������", new String[] { "����", "�������", "�����͵��׷�",
				"���̻�ֶ�ͷ", "����̨", "�����ƾ�", "��������", "��������", "��������", "����˿��",
				"����������ȴ��", "������������", "����", "����", "ͨ�����", "����" });

		productSubType2.put("���ӵ�����Ʒ�����е", new String[] { "���߻�", "�����", "��Ƭ��",
				"�㽺��", "���ӻ�", "���ӵ���������", "����Ԫ�����ͻ�", "���������豸�丽��", "���Ż�", "í�ӻ�",
				"�������ӵ�����Ʒ�����豸", "��ѹ��", "�۽ӻ�", "���߻�", "����߻�", "���߻�", "��Ƭ��",
				"ѹ�ӻ�", "����" });

		productSubType2.put("��Ϳ�豸", new String[] { "�罬�豸", "��ǹ��ɰ��", "��Ϳ��",
				"������Ϳ�豸" });

		productSubType2.put("Ϳװ�豸", new String[] { "����豸", "��Ӿ�豸", "��ɹ̻��豸",
				"���緢���豸", "ǰ�����豸", "����Ϳװ�豸", "Ϳ����", "Ϳװ��", "Ϳװ���", "Ϳװ�����豸",
				"Ϳװ������" });

		productSubType2.put("��ϻ�е", new String[] { "��ɢ��", "��ϻ�е���", "��ϻ�",
				"�����豸", "��ϻ�", "������ϻ�е", "�黯��" });

		productSubType2.put("��Ӧ�豸", new String[] { "��Ӧ��", "��Ӧ�豸���", "��ʽ��Ӧ��",
				"������Ӧ�豸", "��ʽ��Ӧ��" });

		productSubType2.put("ֽ�ӹ���е", new String[] { "��ѹ��", "��׻�", "���л�", "��ֽ��",
				"�����", "ĥ����", "��ֽ��", "����ֽ�ӹ���е", "ѹ����", "ֽ���ͻ�е", "��ֽ��", "ֽ���",
				"ֽ����", "ֽ����", "ֽ�ܻ�" });

		productSubType2.put("�����ӹ���е", new String[] { "�������ͻ�е", "������̻�",
				"���������е", "�����ӹ���е", "����������ֱ��", "������˿��", "����Ϳװ��е", "������ѹ��",
				"���������е", "���������ӹ���е" });

		productSubType2.put("�����մɼӹ��豸", new String[] { "����ĥ�߻�", "�����и��",
				"������ϴ�����", "������׻�", "���������մɼӹ��豸", "�մ��׹��", "�մ��и��", "�пղ����豸",
				"ľ����е", "��ֽ�豸�����" });

		productSubType2.put("�ɿ��е", new String[] { "�����豸", "�ɾ��豸", "���������豸",
				"��ҵװж�豸", "�����ɿ��е�����", "ұ���е", "ʯ�ͻ�е" });

		productSubType2.put("��ҩ��е", new String[] { "���»�", "���ҳ����", "������ҩ��е",
				"ѹƬ��", "ҩƷ��װ��", "ҩ�÷����е", "�����" });

		productSubType2.put("ģ��", new String[] { "ѹ��������ģ��", "����ģ��", "������Ʒģ��",
				"����ģ��", "���ϳ���ģ��", "��ĩұ��ģ��", "��ѹģ��", "�𽺳���ģ��" });

		productSubType2.put("��е���ӹ�", new String[] { "����Ͷ�ѹ", "�ӽ�ӹ�", "���Ӽӹ�",
				"����ӹ�", "����ӹ�", "ģ�߼ӹ�", "��Ϳ�ӹ�", "�и�ӹ�", "������ʽ�ӹ�" });
		
		
		productSubType3.put("�ֶ�����", new String[] { "ˢ��", "�����ֶ�����", "ǯ��", "��˿��",
				"����", "����", "ﱵ�", "����", "����", "�˹�������", "��Ͳ", "�ֶ�����ǹ", "˿׶�Ͱ���",
				"˿׶������װ", "��" });

		productSubType3.put("��", new String[] { "����", "����", "������", "�־⡢ľ����",
				"�;�" });

		productSubType3.put("��������", new String[] { "�����򶤣�ǹ����", "�����������",
				"������í��ǹ����", "��������ǹ", "�������̻�", "������ĥ��", "��������ǹ", "������ǹ",
				"������˿��", "����í��ǹ", "��������", "������", "������", "��������", "������", "�����׹��",
				"������������" });

		productSubType3.put("�綯����", new String[] { "�綯�������", "�綯�׹��", "�紸",
				"�綯���ǻ�", "�綯��̻�", "�綯��ĥ��", "�綯ĥ���", "�綯����", "�綯�¿ڻ�", "�綯ɰ����",
				"�綯ɰ���", "���", "�����", "���", "����", "����", "��ҵ������", "�����綯����",
				"�ȷ�ǹ", "�Ͳ��и��" });

		productSubType3.put("ά������", new String[] { "��Ϲ���", "��Ѷ��Ϲ���", "������Ϲ���",
				"������Ϲ���", "���߹�", "���ʯ����", "��������", "Һѹ����" });

		productSubType3.put("ĥ��", new String[] { "ɰ��", "����ĥ��", "��˿��",
				"��ҵ�ٽ಼�Ͳ��ò�", "ĥ��", "ĥƬ���и�Ƭ", "ĥʯ����ʯ", "ĥͷ", "�׹���", "ɰ��", "ɰ��",
				"ɰֽ", "ҳ�ֺ�ҳƬ" });

		productSubType3.put("ĥ��", new String[] { "��ĥ��", "�׹��", "����ĥ��", "����ĥ��",
				"��Ȼĥ��" });

		productSubType3.put("������", new String[] { "������ץ��", "����", "����͹���",
				"�ܼ�", "��Ͳ", "����", "���ֺ�������", "��ͷ", "����", "�����򱧹�", "��ͷ",
				"����������", "�й�", "ж��", "ֱͨ" });

		productSubType3.put("��е���", new String[] { "ҺѹԪ��", "������е���" });

		productSubType3.put("����", new String[] { "����", "��װ����", "������˿", "���ӻ�",
				"��������", "����ǯ", "��������", "�ս���", "�׻�", "��ת��" });

		productSubType3.put("����", new String[] { "�嵯��", "���ε���", "��������", "���쵯��",
				"Ťת����", "Ƭ����", "������", "��������", "�о���", "ѹ������", "���ε���" });

		productSubType3.put("����Ԫ��", new String[] { "������ͷ", "�������", "������",
				"�������", "����", "��������Ԫ��", "��Դ������", "��շ�����", "����������", "������Ʒ���",
				"����������", "��������װ" });

		productSubType3.put("�������", new String[] { "������", "�������������Ʒ", "��",
				"�๦��ҰӪ����", "��̵�", "������", "�۵�" });

		productSubType3.put("��������������", new String[] { "��ƿ", "������������������" });

		
		
		productSubType4.put("����Һ������Ǳ�", new String[] { "������", "ȼ����Һλ��",
				"��������Һ������Ǳ�", "ѹ����", "�¶ȼ�", "ˮ��", "���ټ�", "�춨װ��", "����װ��",
				"����������" });

		productSubType4.put("��ʪ���Ǳ�", new String[] { "�ǽӴ�ʽ�¶ȼ�", "���������",
				"������ʪ���Ǳ�", "������", "˫�����¶ȼ�", "�¶�У���Ǳ�", "��ʪ�ȼ�", "��ʪ�ȱ�����",
				"��ʪ�ȿ��ƣ����ڣ���", "ѹ��ʽ�¶ȼ�" });

		productSubType4.put("��������", new String[] { "������", "���ٷ�����", "������������",
				"������", "�Զ�����վ" });

		productSubType4.put("��������", new String[] { "����", "V�ͼ�", "�ٷֱ�", "�����",
				"������", "���ӳ�", "�Ի�����", "����", "�߶ȼƺ͸߶ȳ�", "����������", "�ǳ�", "�Ƕȳ�",
				"���", "����", "ƫ�ڼ����", "ƽ��", "ǧ�ֱ�", "ǧ�ֳ�", "��������", "������������",
				"����", "��ȳ�", "ˮƽ��", "���Կ���", "�����������", "Ӱ����", "�α꿨��", "Բ����" });

		productSubType4.put("������׼����",
				new String[] { "���ѧ������׼����", "������������׼����", "��ѧ������׼����",
						"��ѧ������׼����", "����������׼����", "��ѧ��", "��׼����", "ʱ��Ƶ�ʼ�����׼����" });

		productSubType4.put("��е���Ǳ�", new String[] { "������", "��������", "е����",
				"���ٶȲ�����", "��ת������", "ת�ټ�" });

		productSubType4
				.put("ʵ��������", new String[] { "������", "��������ѧ����", "���ؼ�", "�ζ���",
						"������", "��ѧ����", "��Ͳ������", "������", "����ʵ����", "��װ��", "�ձ�",
						"��ƿ", "�Թ�", "�Լ�ƿ", "ˮԡ��", "ʵ����ˮ���ˮ��", "��ƽ����", "��Һ��",
						"��ղ�������" });

		productSubType4.put("��ѧ͸��������", new String[] { "͸�����⾵", "�˹�Ƭ����ɫƬ",
				"�Ŵ�", "��΢��", "Ŀ�����ﾵ", "������ѧ͸��������", "�����Ǻ͹�ȼ�", "��Զ��", "�ֹ���",
				"������", "��ҵɨ����", "��ҵ���", "��ѧ�����", "��դ", "��ѧ���߼����", "��������",
				"�۵���", "ɫ���", "ͶӰ��", "ҹ����", "�նȼ�", "������", "������ռ�" });

		productSubType4.put("��������", new String[] { "�ȱ��������", "ɫ�ס�������",
				"��Ԫ�ط�������", "������������", "��Ʒ����", "ճ�ȼ�", "���ܶȼ�", "�������絼��", "����Ӿ��",
				"�ζ���", "������", "������", "������", "Ũ�ȼ�", "PH��", "������", "ȼ��Ч�ʷ�����",
				"������", "ˮ�ֲⶨ��", "ˮ�ʷ�����", "̼�������", "�Ƕȼ�", "���������" });

		productSubType4.put("���������", new String[] { "�������������", "������������",
				"������̼�����", "�ƾ������", "��ȼ����������", "��������", "�Ȼ�������", "���������",
				"���������", "�������������", "���������", "һ�����������", "һ����̼�����" });

		productSubType4.put("ɫ����", new String[] { "������", "����ɫ����", "����ɫ����",
				"����ɫ����", "ɫ����", "Һ��ɫ��" });

		productSubType4.put("�����", new String[] { "Ӳ�ȼ�", "��װ�������", "���������",
				"��������", "���������", "�ǽ������������", "���������", "������μ����", "��ĥ�����",
				"Ťת�����", "ƽ���", "ƣ�������", "���������豸", "ǿ�������", "���������", "����ָ����",
				"���������", "���������", "ѹ�������", "�������" });

		productSubType4.put("ר�������Ǳ�", new String[] { "ͨѶ���������", "Ԫ����������",
				"��������", "�������", "��ȫ����", "�ⶨ��", "�����", "���������Ǳ�", "��𻨼����",
				"��֯����", "��������", "���������", "�����", "����������", "������ר�������Ǳ�", "ˮ������",
				"ʳƷ��ҩƷ��ȫ�����", "��ͨѶ�������", "��ֽ�������" });

		productSubType4.put("���̲������", new String[] { "��Ķ��", "���������", "����ˮƽ��",
				"��γ��", "�������̲������", "ȫվ��", "�ֳ�GPS��λ��", "ˮ׼��" });

		productSubType4.put("�Զ��������豸",
				new String[] { "��ȫդ", "����ʽ��", "���п���װ��", "���ƣ����ڣ��Ǳ�", "������Ԫ�����",
						"�������Զ����Ǳ�", "У���Ǳ�", "�Զ������׿���ϵͳ", "ִ�л���" });

		productSubType4.put("��װ�����豸", new String[] { "���ƶ������", "������װ�����豸",
				"й©�����", "ѹ�������" });

		productSubType4.put("���Ӳ�������", new String[] { "LCR������", "����������", "��ǿ��",
				"Ƶ�׷�����", "�������Ӳ�������", "�źŷ�����" });

		productSubType4.put("�����������", new String[] { "COD�������", "ROHS�������",
				"���������", "����������", "�۳��������������", "���������������", "�����������", "���߼����" });

		productSubType4.put("������ѧ����", new String[] { "��������̨", "���±���",
				"��ֲ��ʵ������", "���˼���������", "������", "�����Ǻ�PCR��", "�䶳�����", "ø���Ǻ�ϴ���",
				"�����", "����������ѧ����", "����������", "΢��������", "��ϸ��������", "ѪҺ����Һ��������",
				"ҡ��������" });

		productSubType4.put("ѹ���Ǳ�", new String[] { "��ѹ��", "��ѹ��", "����ѹ���Ǳ�",
				"ѹ����", "ѹ��������", "ѹ��У���Ǳ�" });

		productSubType4.put("����ר�������Ǳ�", new String[] { "����", "��������ר�������Ǳ�" });

		productSubType4.put("���ڻ����������", new String[] { "VOC�������", "��ȩ�������",
				"�������ڻ����������", "���߼������", "������" });

		productSubType4.put("�繤�����Ǳ�", new String[] { "������", "���ñ�", "ʾ����",
				"�����繤�����Ǳ�", "���ܱ�", "�ź�Դ/Ƶ�ʼ���", "��ѹ��", "����", "������������", "��ز�����",
				"����", "�����", "���²�����", "���ʱ�", "Ƶ�ʱ�", "ǯ�α�" });

		productSubType4.put("��ʱ���ͼ�����", new String[] { "��ҵ��ʱ��", "������", "��ʱ��" });

		productSubType4.put("����", new String[] { "��ƽ��", "Ƥ����", "���ӳ�", "���Ϻ�",
				"����", "��������", "̨��", "�Ƽ۳�", "������", "�ذ�", "������", "�����", "���ϳ�" });

		productSubType4.put("�����估���򻷾��豸", new String[] { "����������", "������",
				"����������", "�����䡢����", "����������", "��ʴ������", "������", "�ߵ�����", "����������",
				"���º�ʪ������", "�ϻ�������", "ʪ��������", "����������" });

		productSubType4.put("����������", new String[] { "�����", "������", "���������",
				"�ֲڶ���", "��©��", "����̽����", "�ڿ���", "��������������", "̽����", "Ϳ������",
				"������", "�����ؿ󡢵�������" });

		productSubType4.put("��λ�Ǳ�", new String[] { "������Һλ��", "�ŷ���Һλ��",
				"��������λ��", "������λ��", "����Һλ������", "����Һλ��", "�״���λ��", "��λ������",
				"������λ�Ǳ�", "��λ������", "Һλ������", "Һλ����", "Һλ�Ǳ�" });
		
	}

	public static class Company {
		String name;
		String legal;
		String phone;
		String address;
		String link;
		public Company(){}
		
		List<Product> products = new ArrayList<Product>();
		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getLegal() {
			return legal;
		}

		public void setLegal(String legal) {
			this.legal = legal;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getLink() {
			return link;
		}

		public void setLink(String link) {
			this.link = link;
		}

		public List<Product> getProducts() {
			return products;
		}

		public void setProducts(List<Product> products) {
			this.products = products;
		}

	}
	
	public static class Product {
		String name;
		String link;
		String icon;
		public Product(){}
		
		public String getIcon() {
			return icon;
		}
		public void setIcon(String icon) {
			this.icon = icon;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getLink() {
			return link;
		}
		public void setLink(String link) {
			this.link = link;
		}
	}
	
	public static class ProductDetail {
		String company;
		String type;
		String name;
		String link;
		String icon;
		double price;
		String details;
		String images;
		
		public String getCompany() {
			return company;
		}
		public void setCompany(String company) {
			this.company = company;
		}
		public String getType() {
			return type;
		}
		public void setType(String type) {
			this.type = type;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getLink() {
			return link;
		}
		public void setLink(String link) {
			this.link = link;
		}
		public String getIcon() {
			return icon;
		}
		public void setIcon(String icon) {
			this.icon = icon;
		}
		public double getPrice() {
			return price;
		}
		public void setPrice(double price) {
			this.price = price;
		}
		public String getDetails() {
			return details;
		}
		public void setDetails(String details) {
			this.details = details;
		}
		public String getImages() {
			return images;
		}
		public void setImages(String images) {
			this.images = images;
		}
	}
	
	
	private static final Logger logger = LoggerFactory
			.getLogger(ImageUtil.class);
	
	private static Map<String, Document> linkCache = new HashMap<String, Document>();
	
	private static List<String> companyNameList = new ArrayList<String>();
	
	private static List<String> failProductLinks = new ArrayList<String>();
	
	
	private static Document getDocument(String url){
		if (url == null || url.trim().length() == 0) {
			return Document.createShell(url);
		}
		if (linkCache.containsKey(url)) {
			return linkCache.get(url);
		}
		try {
			if (!url.startsWith("http")) {
				url = "http://cn.made-in-china.com" + url;
			}
			int sleepSecond = (int)((Math.random()*3) * 1000);
			if (sleepSecond == 0) { sleepSecond = 2000;}
			logger.info("Read URL("+(sleepSecond/1000)+"s): " + url);
			Document d = Jsoup.connect(url).header("User-Agent", UserAgent).get();
			linkCache.put(url, d);
			Thread.sleep(sleepSecond);
			return d;
		} catch (Exception e) {
			e.printStackTrace();
			return Document.createShell(url);
		}
	}
	
	public static void parseProductType() {
//		System.setProperty("http.proxyHost", "web-proxy.cup.hp.com");
//		System.setProperty("http.proxyPort", "8080");
		
		File file = new File("C:\\uimaster\\release\\made-in-china\\jsondata-��е������ҵ.txt");
		String imageURL = "C:/uimaster/release/made-in-china/site/cn.made-in-china.com/sell/Manufacturing-Processing-Machinery.html";
		logger.info("parsing url: " + imageURL);
		try {
			BufferedWriter writer  = new BufferedWriter(new FileWriter(file,true)); 
			Document doc = Jsoup.parse(new File(imageURL), "GBK");
			Elements result = doc.select(".item-catalog");
			Iterator<Element> i = result.iterator();
			while (i.hasNext()) {
				Element e = i.next();
				Elements subresult = e.select("a");
				Iterator<Element> ii = subresult.iterator();
				while (ii.hasNext()) {
					Element ie = ii.next();
					logger.info("get link: " + ie.text() + "=" + ie.attr("href") );
					try {
						if (!parseProduct(writer, getDocument(ie.attr("href")))) {
							failProductLinks.add(ie.attr("href"));
						}
					} catch (Exception e0) {
						e0.printStackTrace();
					}
				}
			}
			
			result = doc.select("#catlist");
			i = result.iterator();
			if (i.hasNext()) {
				Elements links = i.next().select("a");
				Iterator<Element> link = links.iterator();
				while (link.hasNext()) {
					Element ie = link.next();
					logger.info("get link: " + ie.text() + "=" + ie.attr("href") );
					try {
						if (!parseProduct(writer, getDocument(ie.attr("href")))) {
							failProductLinks.add(ie.attr("href"));
						}
					} catch (Exception e0) {
						e0.printStackTrace();
					}
				}
			}
			
			// retry again.
			linkCache.clear();
			for (String product: failProductLinks) {
				parseProduct(writer, getDocument(product));
			}
			
			writer.close();
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
	}
	
	public static boolean parseProduct(BufferedWriter writer, Document doc) throws Exception {
		Elements result = doc.select(".lst-tab");
		Iterator<Element> i = result.iterator();
		if (i.hasNext()) {
			Element e = i.next();
			//��˾��Ϣ
			String link = e.child(1).child(0).attr("href");
			link = "http://cn.made-in-china.com" + link;
			logger.info("��˾��Ϣѡ��=" + link );
			Document companyTab = getDocument(link);
			
			int total = 0;
			Elements totalItems = companyTab.select(".lst-lead-node");
			Iterator<Element> i0 = totalItems.iterator();
			if (i0.hasNext()) {
				String value = i0.next().child(0).text();
				total = Integer.valueOf(value);
			}
			int pages = total/40;
			if (pages > 100) {
				pages = 100;// read max pages
			}
			parseCompany(writer, companyTab);
			for (int p=2; p < pages; p++) {
				String newLink = link;
				newLink = newLink.replace("1.html", p+".html");
				parseCompany(writer, getDocument(newLink));
			}
			return true;
		}
		return false;
	}
	
	public static boolean exitFlag = true;
	public static int itemCounter = 0;
	public static void parseCompany(BufferedWriter writer, Document doc) throws Exception {
	    
		Elements result = doc.select(".co-item");
		Iterator<Element> i = result.iterator();
		while (i.hasNext()) {
			Element e = i.next();
			Element coname = e.select(".co-name").iterator().next().child(1);
			String companyName = coname.text();
			if (companyNameList.contains(companyName)) {
				System.out.println("��ɨ�裺 " + companyName);
				continue;
			}
			companyNameList.add(companyName);
			
			// break points
			if (exitFlag && !"����Բ���װ���޹�˾".equals(companyName)) {
				continue;
			}
			exitFlag = false;
			
			Document companyMainDoc = getDocument(coname.attr("href"));
			Elements customerInfo = companyMainDoc.select(".cert-info");
			if (customerInfo.size() == 0) {
				continue;
			}
			//��˾����
			Company companyObject = new Company();
			companyObject.setName(companyName);
			logger.info("��˾����=" + companyName);
			
			if (companyMainDoc.select(".contactInfo").size() > 0) {
				// Company info.
				companyObject.setLink(coname.attr("href"));
				result = companyMainDoc.select(".contactInfo");
				i = result.iterator();
				if (i.hasNext()) {
					Element e0 = i.next();
					int size = e0.children().size();
					for (int j=0; j < size; j++) {
						Element child = e0.child(j);
						String attr = child.text();
						if (j == 0) {
							companyObject.setLegal(attr);
						}
						if (attr.startsWith("�ֻ�")) {
							String phone = child.child(0).text();
							companyObject.setPhone(phone);
						} else if (attr.startsWith("��ַ")) {
							String address = attr;
							address = address.replace("&nbsp;", "").replace("��ַ��", "");
							companyObject.setAddress(address.trim());
						}
					}
				}
				
				// Product
				result = companyMainDoc.select(".top_nav");
				i = result.iterator();
				if (i.hasNext()) {
					Element e0 = i.next();
					int size = e0.children().size();
					for (int j=0; j < size; j++) {
						String name = e0.child(j).child(0).text();
						if ("��Ӧ��Ʒ".equals(name)) {
							Document compProductDoc = getDocument(e0.child(j).attr("href"));
							Elements presult = compProductDoc.select(".proitem");
							Iterator<Element> pi = presult.iterator();
							while (pi.hasNext()) {
								Element a = pi.next().child(1).child(0).child(0);
								//logger.info("��Ʒ: " + a.text() + "=" + a.attr("href"));
								Product productObject = new Product(); 
								productObject.setName(a.text());
								productObject.setLink(a.attr("href"));
								companyObject.getProducts().add(productObject);
							}
							break;
						}
					}
				}
				
				JSONObject json = new JSONObject(companyObject);
				logger.info((++itemCounter)+ "json: " + json.toString());
				String line = json.toString();  
		        writer.write(line);  
		        writer.write("\n");
			    writer.flush();  
			} else {
				// Company info.
				Iterator<Element> i0 = customerInfo.iterator();
				if (i0.hasNext()) {
					String k = i0.next().child(1).child(0).attr("href");
					companyObject.setLink(k);
					parseCompanyContactInfo(companyObject, getDocument(k));
				}
				
				// Company product.
				Elements presult = companyMainDoc.select(".proName");
				Iterator<Element> pi = presult.iterator();
				while (pi.hasNext()) {
					Element a = pi.next().child(0);
					//logger.info("��Ʒ: " + a.text() + "=" + a.attr("href"));
					Product productObject = new Product(); 
					productObject.setName(a.text());
					productObject.setLink(a.attr("href"));
					companyObject.getProducts().add(productObject);
				}
				JSONObject json = new JSONObject(companyObject);
				logger.info((++itemCounter)+ "json: " + json.toString());
				String line = json.toString();  
		        writer.write(line);  
		        writer.write("\n");
			    writer.flush();  
			}
		}
	}
	
	public static void parseCompanyContactInfo(Company companyObject, Document doc) {
		Elements result = doc.select(".card-name");
		Iterator<Element> i = result.iterator();
		if (i.hasNext()) {
			Element e = i.next();
			//��˾����
			companyObject.setLegal(e.text());
		}
		
		result = doc.select(".card-info-bd");
		i = result.iterator();
		if (i.hasNext()) {
			Element e = i.next();
			int size = e.children().size();
			for (int j=0; j < size; j++) {
				Element child = e.child(j);
				String attr = child.child(0).text();
				if (attr.startsWith("�ֻ�")) {
					String phone = child.child(1).child(0).text();
					companyObject.setPhone(phone);
				} else if (attr.startsWith("�绰") && companyObject.getPhone() == null) {
					String phone = child.child(1).child(0).text();
					companyObject.setPhone(phone);
				} else if (attr.startsWith("��ַ")) {
					String address = child.child(1).html();
					address = address.replace("&nbsp;", "");
					companyObject.setAddress(address.trim());
				}
			}
		}
	}
	
	
	public static void parseProductDetail() {
//		System.setProperty("http.proxyHost", "web-proxy.cup.hp.com");
//		System.setProperty("http.proxyPort", "8080");
		
		itemCounter = 0;
		String productType = "jsondata-��е������ҵ";
		File file = new File("C:\\uimaster\\release\\made-in-china\\"+productType+".txt");
		File productFile = new File("C:\\uimaster\\release\\made-in-china\\productdetail-��е������ҵ.txt");
		logger.info("parsing file: " + file);
		try {
			BufferedWriter writer  = new BufferedWriter(new FileWriter(productFile,true)); 
			BufferedReader br= new BufferedReader(new FileReader(file));
			String line = null;
			while((line = br.readLine())!=null){
				JSONObject object = new JSONObject(line);
				JSONArray products = object.getJSONArray("products");
				for (int i=0; i<products.length(); i ++) {
					ProductDetail productObject = new ProductDetail(); 
					productObject.setCompany(object.getString("name"));
					JSONObject item = products.getJSONObject(i);
					productObject.setName(item.getString("name").replace("...", ""));
					productObject.setLink(item.getString("link"));
					productObject.setType("��е������ҵ");
					
					if (companyNameList.contains(productObject.getLink())) {
						continue;
					}
					companyNameList.add(productObject.getLink());
					
					// break point
					if (exitFlag && !productObject.getCompany().startsWith("���ܰ�װ��|���������Զ����豸���޹�˾")) {
						continue;
					}
					exitFlag = false;
//					
					Document doc = getDocument(productObject.getLink());
					
					Elements result = doc.select(".proDetail_box");
					Iterator<Element> ii = result.iterator();
					if (ii.hasNext()) {
						Element e = ii.next().child(1);
						StringBuffer sb = new StringBuffer();
						sb.append("<HTML>\n<HEAD>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
						sb.append("<link href=\"/uimaster/product/product.css\" rel=\"stylesheet\" type=\"text/css\">\n</HEAD>\n<BODY>\n");
						sb.append(e.html());
						sb.append("\n</BODY></HTML>");
						FileUtil.write("C:\\uimaster\\release\\made-in-china\\"+productType+"\\product\\uimaster\\mm"+(++itemCounter), "desc.html", sb.toString());
						productObject.setDetails("/product/uimaster/mm"+(itemCounter)+"/desc.html");
					} else {
						itemCounter ++ ;
					}
					
					result = doc.select(".prices");
					ii = result.iterator();
					if (ii.hasNext()) {
						String strPrice = ii.next().child(0).child(1).child(1).text();
						try {
						productObject.setPrice(Double.valueOf(strPrice));
						} catch (Exception ee) {}
					}
					
					String relativeImagePath = "/product/uimaster/mm"+(itemCounter)+"/images";
					productObject.setImages(relativeImagePath);
					result = doc.select(".mImgs");
					ii = result.iterator();
					if (ii.hasNext()) {
						Element tr = ii.next().child(0).child(0).child(0);
						int size = tr.children().size();
						for (int j=0; j < size; j++) {
							try {
								Element td = tr.child(j);
								if (!td.hasAttr("rel")) {continue;}
								JSONObject tdItem = new JSONObject(td.attr("rel"));
								String url = tdItem.getString("largeimage");
								String fileName = url.substring(url.lastIndexOf('/') + 1);
								if (fileName.length() > 50) {
									fileName = fileName.substring(fileName.length() - 20);
								}
								File saveFile = new File("C:\\uimaster\\release\\made-in-china\\"+ productType + relativeImagePath);
								if (!saveFile.exists()) {saveFile.mkdirs();}
								ImageUtil.downloadImage(url, saveFile, fileName);
							} catch (Exception e) {
								e.printStackTrace();
							}
						}
					} else {
						result = doc.select(".detailPhoto");
						ii = result.iterator();
						if (ii.hasNext()) {
							try {
								String url = ii.next().child(0).child(0).child(0).child(0).child(0).attr("data-url");
								String fileName = url.substring(url.lastIndexOf('/') + 1);
								if (fileName.length() > 50) {
									fileName = fileName.substring(fileName.length() - 20);
								}
								File saveFile = new File("C:\\uimaster\\release\\made-in-china\\"+ productType + relativeImagePath);
								if (!saveFile.exists()) {saveFile.mkdirs();}
								ImageUtil.downloadImage(url, saveFile, fileName);
							} catch (Exception e) {
								e.printStackTrace();
							}
						}
					}
					
					JSONObject json = new JSONObject(productObject);
					logger.info(itemCounter+ "json: " + json.toString());
			        writer.write(json.toString());  
			        writer.write("\n");
				    writer.flush();  
				}
			}
			br.close();
			writer.close();
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
	}
	
	public static void validateProductDetail() {
		System.setProperty("http.proxyHost", "web-proxy.cup.hp.com");
		System.setProperty("http.proxyPort", "8080");
//		
		itemCounter=0;
		String productType = "productdetail-�����Ǳ���ҵ";
		File file = new File("C:\\uimaster\\release\\made-in-china\\"+productType+".txt");
		File productFile = new File("C:\\uimaster\\release\\made-in-china\\productdetail-�����Ǳ���ҵ-new.txt");
		logger.info("parsing file: " + file);
		try {
			BufferedWriter writer  = new BufferedWriter(new FileWriter(productFile,true)); 
			BufferedReader br= new BufferedReader(new FileReader(file));
			String line = null;
			while((line = br.readLine())!=null){
				JSONObject object = new JSONObject(line);
				ProductDetail productObject = new ProductDetail(); 
				productObject.setCompany(object.getString("company"));
				productObject.setName(object.getString("name"));
				productObject.setLink(object.getString("link"));
				productObject.setType(object.getString("type"));
				productObject.setImages(object.getString("images"));
				productObject.setPrice(object.getDouble("price"));
				productObject.setIcon(null);
				productObject.setDetails(object.getString("details"));
//				if (itemCounter <= 18709) {
//					itemCounter ++ ;
//					continue;
//				}
				if ((productObject.getDetails() != null && !"null".equals(productObject.getDetails())
						&& !"".equals(productObject.getDetails()))) {
					JSONObject json = new JSONObject(productObject);
					//logger.info(itemCounter+ "json: " + json.toString());
			        writer.write(json.toString());  
			        writer.write("\n");
				    writer.flush();  
					itemCounter ++ ;
					continue;
				}
				
				Document doc = getDocument(productObject.getLink());
				
				Elements result = doc.select(".proDetail_box");
				Iterator<Element> ii = result.iterator();
				if (ii.hasNext()) {
					Element p = ii.next();
					Element e = p.child(1);
					if (!e.hasClass("description")) {
						e = p.child(2);
					}
					StringBuffer sb = new StringBuffer();
					sb.append("<HTML>\n<HEAD>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
					sb.append("<link href=\"/uimaster/product/product.css\" rel=\"stylesheet\" type=\"text/css\">\n</HEAD>\n<BODY>\n");
					sb.append(e.html());
					sb.append("\n</BODY></HTML>");
					FileUtil.write("C:\\uimaster\\release\\made-in-china\\"+productType+"\\product\\uimaster\\eee"+(++itemCounter), "desc.html", sb.toString());
					productObject.setDetails("/product/uimaster/eee"+(itemCounter)+"/desc.html");
				} else {
					result = doc.select(".marketdet");
					ii = result.iterator();
					if (ii.hasNext()) {
						Element e = ii.next();
						StringBuffer sb = new StringBuffer();
						sb.append("<HTML>\n<HEAD>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
						sb.append("<link href=\"/uimaster/product/product.css\" rel=\"stylesheet\" type=\"text/css\">\n</HEAD>\n<BODY>\n");
						sb.append(e.html());
						sb.append("\n</BODY></HTML>");
						FileUtil.write("C:\\uimaster\\release\\made-in-china\\"+productType+"\\product\\uimaster\\eee"+(++itemCounter), "desc.html", sb.toString());
						productObject.setDetails("/product/uimaster/eee"+(itemCounter)+"/desc.html");
					} else {
						logger.warn("Unable to get the details from :" + productObject.getLink());
						itemCounter ++ ;
					}
				}
				
				JSONObject json = new JSONObject(productObject);
				logger.info(itemCounter+ "json: " + json.toString());
		        writer.write(json.toString());  
		        writer.write("\n");
			    writer.flush();  
			}
			br.close();
			writer.close();
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
	}
	
	public static void main(String[] argus) {
		try {
			ProductTypeDefinition.validateProductDetail();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	

}
