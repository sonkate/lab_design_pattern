class Student:
  def __init__(self,name):
      self.name = name

  def study(self):
    print('{} is studying'.format(self.name))


class StudentGraduation(Student):
  def study(self):
    print('{} is studying'.format(self.name))

  def deliverTCC(self):
    print('{} is delivering TCC'.format(self.name))


class StudentPosGraduation(Student):
  def study(self):
    print('{} is studying and searching'.format(self.name))
    
student = StudentGraduation('John')
student.study()
student.deliverTCC()
graduate_student = StudentPosGraduation('John Dep')
graduate_student.study()